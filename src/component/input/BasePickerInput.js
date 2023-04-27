import 'dayjs/locale/it';
import 'dayjs/locale/de';
import 'dayjs/locale/fr';
import 'dayjs/locale/es';

import React from 'react';

import PropTypes from 'prop-types';
import { useLocale } from 'react-admin';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  deDE,
  esES,
  frFR,
  itIT,
} from '@mui/x-date-pickers/locales';

const localeTexts = {
	it: itIT.components.MuiLocalizationProvider.defaultProps.localeText,
	de: deDE.components.MuiLocalizationProvider.defaultProps.localeText,
	fr: frFR.components.MuiLocalizationProvider.defaultProps.localeText,
	es: esES.components.MuiLocalizationProvider.defaultProps.localeText
};

const BasePickerInput = ({ children, locale, dateAdapter, ...props }) => {
	const defaultLocale = useLocale();

	return (
		<LocalizationProvider
			dateAdapter={dateAdapter}
			adapterLocale={locale || defaultLocale}
			localeText={localeTexts?.[locale || defaultLocale] || {}}
		>
			{children}
		</LocalizationProvider>
	);
};

BasePickerInput.defaultProps = {
	dateAdapter: AdapterDayjs
};

BasePickerInput.propTypes = {
	children: PropTypes.element.isRequired,
	dateAdapter: PropTypes.func,
	locale: PropTypes.string
};

export default BasePickerInput;
