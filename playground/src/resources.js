import LanguageIcon from '@mui/icons-material/Language';
import NotificationImportantIcon
  from '@mui/icons-material/NotificationImportant';
import PeopleIcon from '@mui/icons-material/People';

const resources = [
	{
		name: "notifications",
		options: {
			group: "notifications",
			roles: ["admin"],
			// caption: true,
			order: 10,
		},
		create: null,
		icon: NotificationImportantIcon,
	},
	{
		name: "users",
		options: {
			group: "settings",
			roles: ["admin"],
			// caption: true,
			order: 10,
		},
		icon: PeopleIcon,
	},
	{
		name: "language-messages",
		options: {
			group: "settings",
			roles: ["admin"],
			// caption: true,
			order: 10,
		},
		icon: LanguageIcon,
	},
];

export default resources;
