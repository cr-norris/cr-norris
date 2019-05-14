---
layout: default
---

<div class="page row top-xs start-xs">
	<div class="post-sidebar col-xs-3">
		<ul class="meta">
			<li>{{ page.date | date: "%b %d, %Y" }}</li>
			<li>Categories: {{ page.categories | join:', ' }}</li>
			<li>Tags: {{ page.tags | join:', ' }}</li>
		</ul>
	</div>
	<div class="post col-xs-9">
		<h4>{{ page.title }}</h3>
		<p>{{ content }}</p>		
	</div>
</div>