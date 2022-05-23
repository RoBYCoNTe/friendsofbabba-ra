class Workflow {
  constructor(data) {
    this.states = data.states;
  }

  canCreate(roles) {
    return this.check("create", roles);
  }

  canEdit(roles, record) {
    return this.check("edit", roles, record);
  }

  canRead(roles, record) {
    return this.check("read", roles, record);
  }

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

  canEditField(fieldName, roles, record) {
    return this.checkField("edit", roles, fieldName, record);
  }

  canReadField(fieldName, roles, record) {
    return this.checkField("read", roles, fieldName, record);
  }

  canReadFields(fields, roles, record) {
    return fields.some((field) => this.canReadField(field, roles, record));
  }

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
    const check = permissions.some((permission) =>
      roles.some((role) => permission.role === role.code)
    );

    return check;
  }

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
