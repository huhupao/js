// ==UserScript==
// @name          leetcode_sort_by_ACRates
// @namespace      http://github.com/huhupao
// @description    sort problems by ACRates
// @include        http://oj.leetcode.com/problems/
// ==/UserScript==

function sortList(table_node){
	var new_table = table_node.cloneNode(false);
	new_table.appendChild(table_node.getElementsByTagName('thead')[0]);
	var tbody = table_node.getElementsByTagName('tbody')[0];
	var new_tbody = tbody.cloneNode(false);
	
	var list=[]
	for(var i = 0; i < tbody.childNodes.length; i++){
		if(tbody.childNodes[i].nodeName === 'TR')
            list.push(tbody.childNodes[i]);
	}
	list.sort(function(a, b){
		var rate_a = a.getElementsByTagName('td')[3].innerText;
		var rate_b = b.getElementsByTagName('td')[3].innerText;
		return parseFloat(rate_b) - parseFloat(rate_a);
	});
	
	for(var i = 0; i < list.length; i++){
		new_tbody.appendChild(list[i]);
	}
	new_table.appendChild(new_tbody);
	table_node.parentNode.replaceChild(new_table, table_node);
}
sortList(document.getElementById('problemList'));