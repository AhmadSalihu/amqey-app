import React from 'react';
import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as CgIcons from 'react-icons/cg'
import * as SiIcons from 'react-icons/si'


export const sidebarData = [
	{
		title: 'Product',
		path: '/overview',
		icon: <FaIcons.FaCartPlus />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
		subNav: [
			{
				title: 'New Product',
				path: '/overview/users',
				icon: <FaIcons.FaProductHunt />
			},
			{
				title: 'Bulk Upload',
				path: '/overview/revenue',
				icon: <RiIcons.RiProductHuntLine />
			},
			{
				title: 'View Products',
				path: '/overview/revenue',
				icon: <CgIcons.CgProductHunt />
			},
		]
	},
	{
		title: 'Order',
		path: '/reports',
		icon: <RiIcons.RiOrderPlayFill />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
		subNav: [
			{
				title: 'New Orders',
				path: '/reports/reports1',
			},
			{
				title: 'Fulfilled Orders',
				path: '/reports/reports2',
			},
			{
				title: 'Canceled Orders',
				path: '/reports/reports3',
			},
		]
	},
	{
		title: 'Business',
		path: '/reports',
		icon: <IoIcons.IoMdBusiness />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
		subNav: [
			{
				title: 'Profile',
				path: '/reports/reports1',
			},
			{
				title: 'New Staff',
				path: '/reports/reports2',
			},
			{
				title: 'View Staff',
				path: '/reports/reports3',
			},
		]
	},
	{
		title: 'Payouts',
		path: '/reports',
		icon: <SiIcons.SiSamsungpay />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
		subNav: [
			{
				title: 'Account',
				path: '/reports/reports1',
			},
			{
				title: 'Add Account',
				path: '/reports/reports2',
			},
			{
				title: 'Request Payouts',
				path: '/reports/reports3',
			},
		]
	},
	{
		title: 'Profile',
		path: '/reports',
		icon: <CgIcons.CgProfile />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
		subNav: [
			{
				title: 'Update Profile',
				path: '/reports/reports1',
			},
			{
				title: 'Passsword',
				path: '/reports/reports2',
			},
		]
	}
]
