import React, { createContext, useContext, useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { get } from 'lodash';
import useCrud from './useCrud';

const defaultResponseDataMapper = ({ data }) => data;
/**
 * Export a context that will be used to provide the crud instance to the children.
 */
const CrudContext = createContext({});

/**
 * CrudProvider component, used to provide the crud instance to the children.
 *
 * @param {Array|Object} props.children The children to render.
 * @param {Object} props.components List of additional components to render.
 * @param {string} props.apiUrl The api url.
 *
 * @returns {React.ReactElement}
 */
const CrudProvider = ({
	children,
	components,
	apiUrl,
	endpoint = '/crud/load',
	responseDataMapper = defaultResponseDataMapper
}) => {
	const [entities, setEntities] = useState({});
	const { loading, data } = useCrud({ apiUrl, endpoint, responseDataMapper });

	const getGrid = (entity) => get(entities, `${entity}.grid`, false);
	const getForm = (entity) => get(entities, `${entity}.form`, false);

	useEffect(() => setEntities(data), [data]);

	return (
		<CrudContext.Provider
			value={{ apiUrl, loading, data, components, getGrid, getForm }}
		>
			{children}
		</CrudContext.Provider>
	);
};

CrudProvider.propTypes = {
	/**
	 * The children to render.
	 *
	 * @type {Array|Object}
	 */
	children: PropTypes.node.isRequired,
	/**
	 * List of additional components to render.
	 *
	 * @type {Object}
	 */
	components: PropTypes.object,
	/**
	 * The api url from which to fetch the crud entities.
	 *
	 * @type {string}
	 */
	apiUrl: PropTypes.string.isRequired
};

const useCrudContext = () => useContext(CrudContext);

export { CrudContext, CrudProvider, useCrudContext };
