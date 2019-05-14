---
layout: default
---

<div class="page row top-xs start-xs">
	<div class="col-xs-12 col-sm-12 col-md-3">
		<figure><img src="{{ page.image }}"></figure>
		<figcaption>{{ page.image-caption }}</figcaption>
		<ul class="meta">
			<li>{{ page.date | date: "%b %d, %Y" }}</li>
			<li>Categories: {{ page.categories | join:', ' }}</li>
			<li>Tags: {{ page.tags | join:', ' }}</li>
		</ul>
	</div>
	<div class="post col-xs-12 col-sm-9">
		<h4>{{ page.title }}</h3>
		{{ content }}	
	</div>
</div>