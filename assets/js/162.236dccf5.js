(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{456:function(s,t,a){"use strict";a.r(t);var n=a(10),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_7-mysql使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-mysql使用"}},[s._v("#")]),s._v(" 7.mysql使用")]),s._v(" "),t("h2",{attrs:{id:"mysql-关系型数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-关系型数据库"}},[s._v("#")]),s._v(" MySQL：关系型数据库")]),s._v(" "),t("blockquote",[t("p",[s._v('所谓的"关系型"可以理解为"表格"的概念')])]),s._v(" "),t("h3",{attrs:{id:"术语"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#术语"}},[s._v("#")]),s._v(" 术语")]),s._v(" "),t("ol",[t("li",[s._v("数据库: 数据库是一些关联表的集合。")]),s._v(" "),t("li",[s._v("数据表: 表是数据的矩阵。在一个数据库中的表看起来像一个简单的电子表格。")]),s._v(" "),t("li",[s._v("列: 一列(数据元素) 包含了相同类型的数据, 例如邮政编码的数据。")]),s._v(" "),t("li",[s._v("行：一行（=元组，或记录）是一组相关的数据，例如一条用户订阅的数据。")]),s._v(" "),t("li",[s._v("冗余：存储两倍数据，冗余降低了性能，但提高了数据的安全性。")]),s._v(" "),t("li",[s._v("主键：主键是唯一的。一个数据表中只能包含一个主键。你可以使用主键来查询数据。")]),s._v(" "),t("li",[s._v("外键：外键用于关联两个表。")]),s._v(" "),t("li",[s._v("复合键：复合键（组合键）将多个列作为一个索引键，一般用于复合索引。")]),s._v(" "),t("li",[s._v("索引：使用索引可快速访问数据库表中的特定信息。索引是对数据库表中一列或多列的值进行排序的一种结构。类似于书籍的目录。")]),s._v(" "),t("li",[s._v("参照完整性: 参照的完整性要求关系中不允许引用不存在的实体。与实体完整性是关系模型必须满足的完整性约束条件，目的是保证数据的一致性。")])]),s._v(" "),t("h3",{attrs:{id:"常用语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用语句"}},[s._v("#")]),s._v(" 常用语句")]),s._v(" "),t("h4",{attrs:{id:"增"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#增"}},[s._v("#")]),s._v(" 增")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 插入数据")]),s._v("\nINSERT INTO tb_name VALUES "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Gates'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Bill'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ACC'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Beijing'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 插入指定列的数据")]),s._v("\nINSERT INTO tb_name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tb_field1, tb_field2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" VALUES "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Gates'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Bill'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h4",{attrs:{id:"删"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删"}},[s._v("#")]),s._v(" 删")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除一个记录")]),s._v("\nDELETE FROM tb_name WHERE name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Bill'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除所有行")]),s._v("\nDELETE FROM tb_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除表")]),s._v("\nDROP TABLE tb_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除数据库")]),s._v("\nDROP DATABASE db_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除索引")]),s._v("\nALTER TABLE tb_name DROP INDEX "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("索引名称"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除列")]),s._v("\nALTER TABLE tb_name  DROP COLUMN column_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h4",{attrs:{id:"改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#改"}},[s._v("#")]),s._v(" 改")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据修改")]),s._v("\nUPDATE tb_name SET tb_field1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'One'")]),s._v(", tb_field2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Two'")]),s._v(" WHERE tb_field3 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'111'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 属性修改")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加列")]),s._v("\nALTER TABLE tb_name ADD COLUMN state ENUM"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" NOT NULL DEFAULT "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加唯一約束")]),s._v("\nALTER TABLE tb_name ADD UNIQUE "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nCREATE UNIQUE INDEX "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("索引名称"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" ON tb_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tb_field"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更改列属性")]),s._v("\nALTER TABLE tb_name MODIFY COLUMN tb_field VARCHAR"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更改列名")]),s._v("\nALTER TABLE tb_name RNAME COLUMN tb_fieldA to tb_fieldB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nALTER TABLE tb_name CHANGE tb_fieldA tb_fieldB varchar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("h4",{attrs:{id:"查"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查"}},[s._v("#")]),s._v(" 查")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 基本查询")]),s._v("\nSELECT * FROM tb_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nSELECT * FROM tb_name WHERE "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" XXX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 多条查询")]),s._v("\nSELECT * FROM tb_name WHERE "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("xx, xx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询记录总数")]),s._v("\nSELECT count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("*"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" FROM tb_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询前十条数据")]),s._v("\nSELECT * FROM tb_name LIMIT "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);