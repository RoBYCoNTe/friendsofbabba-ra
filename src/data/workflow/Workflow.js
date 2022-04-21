class Workflow {
  constructor(data) {
    this.states = data.states;
  }

  /**
   * Controlla se l'utente ha il permesso di creazione sullo stato iniziale
   * @param {*} roles Ruoli dell'utente
   */
  canCreate(roles) {
    return this.check("create", roles);
  }

  /**
   * Controlla se l'utente ha il permesso di scrittura sullo stato in cui
   * si trova il record
   * @param {*} roles Ruoli dell'utente
   * @param {*} record
   */
  canEdit(roles, record) {
    return this.check("edit", roles, record);
  }

  /**
   * Controlla se l'utente ha il permesso di lettura sullo stato in cui
   * si trova il record
   * @param {*} roles Ruoli dell'utente
   * @param {*} record
   */
  canRead(roles, record) {
    return this.check("read", roles, record);
  }

  /**
   * Controlla se l'utente ha il permesso specificato nella stato in cui
   * si trova il record
   * @param {String} permission
   * @param {*} roles Ruoli dell'utente
   * @param {*} record
   */
  check(permission, roles, record) {
    const perm = `${permission.charAt(0).toUpperCase()}${permission.slice(1)}`;
    const can = `can${perm}`;
    const state =
      record && record.id > 0 && record.transaction
        ? this.states.find((s) => s.code === record.transaction.state)
        : this.states.find((s) => s.isInitial);
    const permissions = state.permissions.filter((p) => p[can]);
    return permissions.some((permission) =>
      roles.some((role) => permission.role === role.code)
    );
  }

  /**
   * Controlla se l'utente ha il permesso di scrittura per il campo specificato,
   * nello stato in cui si trova il record
   * @param {String} fieldName
   * @param {Array} roles Ruoli dell'utente
   * @param {Object} record
   */
  canEditField(fieldName, roles, record) {
    return this.checkField("edit", roles, fieldName, record);
  }

  /**
   * Controlla se l'utente ha il permesso di lettura per il campo specificato,
   * nello stato in cui si trova il record
   * @param {String} fieldName
   * @param {Array} roles Ruoli dell'utente
   * @param {Object} record
   */
  canReadField(fieldName, roles, record) {
    return this.checkField("read", roles, fieldName, record);
  }

  /**
   * @description
   *  Controlla se l'utente ha i permessi necessari per leggere uno o più campi tra quelli
   *  specificati nell'array fields.
   *
   * @param {Array} fields
   *  Elenco dei campi di cui verificare il permesso.
   * @param {Array} roles
   *  Elenco dei ruoli associati all'utente
   * @param {Object} record
   *  Record principale su cui verificare i permessi di workflow.
   */
  canReadFields(fields, roles, record) {
    return fields.some((field) => this.canReadField(field, roles, record));
  }

  /**
   * Controlla se l'utente ha il permesso per il campo specificato,
   * per lo stato in cui si trova il record
   * @param {String} permission
   * @param {array} roles Ruoli dell'utente
   * @param {String} fieldName
   * @param {Object} record
   */
  checkField(permission, roles, fieldName, record) {
    const perm = `${permission.charAt(0).toUpperCase()}${permission.slice(1)}`;
    const can = `can${perm}`;
    const state =
      record && record.transaction
        ? this.states.find((s) => s.code === record.transaction.state)
        : this.states.find((s) => s.isInitial);
    const field = state.fields.find((f) => f.name === fieldName);
    if (!field) {
      return false;
    }
    const permissions = field.permissions.filter((p) => p[can]);
    return permissions.some((permission) =>
      roles.some((role) => permission.role === role.code)
    );
  }

  /**
   * Ottiene gli stati successivi disponibili dell'entità sottoposta a WF.
   * Se si tratta di una creazione (record.id undefined) viene ritornato lo stato
   * iniziale (sempre se si hanno i permessi)
   * @param {*} roles Ruoli dell'utente
   * @param {*} record
   */
  getNextStates(roles, record) {
    if (!record) {
      return [];
    }
    let possibleStates = [];
    if (record.transaction) {
      const state = this.states.find(
        (state) => state.code === record.transaction.state
      );
      possibleStates = Object.keys(state.transitions).map((code) =>
        this.states.find((s) => s.code === code)
      );
    } else {
      const initial = this.states.find((state) => state.isInitial);
      possibleStates = [initial];
    }

    const nextStates = possibleStates.filter((state) =>
      state.permissions.some((p) =>
        roles.some((r) => r.code === p.role && (p.canCreate || p.canMove))
      )
    );
    return nextStates;
  }

  /**
   * Indica se per il passaggio nello stato specificato è necessario compilare il campo note obbligatoriamente.
   * @param {Object} record
   *  Record per il quale si richiede la verifica.
   * @param {Object} state
   */
  needsNotes(record, state) {
    if (!record || !state) {
      return false;
    }
    if (record.transaction) {
      const currentState = this.states.find(
        (state) => state.code === record.transaction.state
      );
      if (currentState && currentState.transitions[state.code]) {
        return currentState.transitions[state.code].notesRequired;
      }
    }
    return false;
  }

  getState(record) {
    const transaction = record.transaction;
    if (!transaction) {
      return null;
    }
    return this.states.find((s) => s.code === transaction.state);
  }
  getStateByCode(code) {
    return this.states.find((s) => s.code === code);
  }
}

export default Workflow;
