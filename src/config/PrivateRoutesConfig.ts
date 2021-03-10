import Dashboard from "../components/Dashboard"
import Profile from "../components/Profile"
import School from "../components/School"
import StudentRoutine from "../components/StudentRoutine"
import SubmitGrades from "../components/SubmitGrades"
import Roles from "./Roles"

const PrivateRoutesConfig = [
	{
		component: Dashboard,
		path: '/dashboard',
		title: 'Dashboard',
		permission: [
			Roles.SUPER_ADMIN,
			Roles.ADMIN,
		],
	},
	{
		component: Profile,
		path: '/profile',
		title: 'Profile',
		permission: [
			Roles.SUPER_ADMIN,
			Roles.ADMIN,
			Roles.MANAGER,
			Roles.CUSTOMER
		],
	},
	{
		component: SubmitGrades,
		path: '/SubmitGrades',
		title: 'Submit Grades',
		permission: [
			Roles.TEACHER
		]
	},
	{
		component: StudentRoutine,
		path: '/StudentRoutine',
		title: 'Student Routine',
		permission: [Roles.STUDENT]
	},
	{
		component: School,
		path: '/school',
		title: 'School',
		permission: [
			Roles.SUPER_ADMIN,
			Roles.STUDENT,
			Roles.TEACHER
		]
	},

	{
		path: '/student/getall',
		title: 'Student',
		methods: ['get', 'post','put'],
		permission: [
			Roles.STUDENT
		]
	},
]

export default PrivateRoutesConfig