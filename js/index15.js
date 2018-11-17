'use strict';

var list = [
	{
		title: '百度',
		href: 'https://www.baidu.com',
		list: [
			{
                title: '百度知道',
                href: 'https://zhidao.baidu.com/',
				list: [
					{
						title: '三级菜单',
						list: [
							{
                                title: '传智播客',
                                href: 'https://www.baidu.com/s?wd=%E4%BC%A0%E6%99%BA%E6%92%AD%E5%AE%A2'
							}
						]
					},
					{
						title: '三级菜单'
					},
					{
						title: '三级菜单'
					},
					{
						title: '三级菜单'
					}
				]
			},
			{
                title: '百度图片',
                href: 'https://image.baidu.com',
				list: [
					{
						title: '三级菜单'
					},
					{
						title: '三级菜单'
					},
					{
						title: '三级菜单'
					},
					{
						title: '三级菜单'
					}
				]
			},
			{
				title: '二级菜单',
				list: [
					{
						title: '三级菜单',
						list: [
							{
								title: '三级菜单',
								list: [
									{
										title: '四级菜单'
									}
								]
							},
							{
								title: '三级菜单'
							},
							{
								title: '三级菜单'
							},
							{
								title: '三级菜单'
							}
						]
					},
					{
						title: '三级菜单'
					},
					{
						title: '三级菜单'
					},
					{
						title: '三级菜单'
					}
				]
			},
			{
				title: '二级菜单',
				list: [
					{
						title: '三级菜单'
					},
					{
						title: '三级菜单'
					}
				]
			}
		]
	},
	{
		title: '谷歌',
		href: 'https://www.google.com',
		list: [
			{
				title: '二级菜单',
				list: [
					{
						title: '三级菜单'
					},
					{
						title: '三级菜单'
					}
				]
			},
			{
				title: '二级菜单',
				list: [
					{
						title: '三级菜单'
					},
					{
						title: '三级菜单'
					}
				]
			},
			{
				title: '二级菜单',
				list: [
					{
						title: '三级菜单'
					},
					{
						title: '三级菜单'
					}
				]
			}
		]
	},
	{
		title: '有道',
		href: 'https://www.youdao.com',
		list: []
	}
];

function createNav(list, parent, notFirst) {
	parent = typeof parent == 'string' ? document.getElementById(parent) : parent;
	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var navItem = document.createElement('li');
		var navItemlink = document.createElement('a');
		navItemlink.innerHTML = item.title;
		navItemlink.href = item.href || '#';
		navItem.appendChild(navItemlink);
		parent.appendChild(navItem);
		if (notFirst) {
			navItem.className = 'child-li';
		} else {
			navItem.className = 'nav-li';
		}
		if (item.list && item.list.length) {
			var itemNavBox = document.createElement('ul');
			itemNavBox.className = 'child-nav';
			navItem.appendChild(itemNavBox);
			createNav(item.list, itemNavBox, true);
		}
	}
}

createNav(list, 'nav');
createNav(list, 'nav2');
