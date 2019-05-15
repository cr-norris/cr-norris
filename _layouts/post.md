---
layout: default
---

<div class="page row top-xs start-xs">
	<div class="col-xs-12 col-sm-4">
		<figure><img src="{{ page.image }}"></figure>
		<figcaption>{{ page.image-caption }}</figcaption>
		<ul class="meta">
			<li>Categories: {{ page.categories | join:', ' }}</li>
			<li>Tags: {{ page.tags | join:', ' }}</li>
			<li>{{ page.date | date: "%b %d, %Y" }}</li>
			{% if page.channel %}
			<li><a href="https://www.are.na/channels/{{ page.channel }}" target="_blank">Arena Channel</a></li>
			{% endif %}
		</ul>			
	</div>
	<div class="post col-xs-12 col-sm-8">
		<h4 class="post-title">{{ page.title }}</h3>
		<div class="post-content">
			{{ content }}
		</div>
	</div>
</div>

