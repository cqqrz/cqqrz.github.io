Example on how to use the image zoom:
```html
<!-- build:title -->Sample<!-- /build:title -->
<!-- build:head -->
	<script src="/lib/image-zoom/image-zoom.js" defer></script>
	<link rel="stylesheet" href="/lib/image-zoom/image-zoom.css" />
<!-- /build:head -->
<!-- build:content -->
    <img src="example-small.png" data-fullsrc="example.png" alt="Example Image" class="image-zoom" />

    <div id="image-modal" class="image-modal">
      <img id="modal-img" src="" alt="Expanded view" />
    </div>
<!-- /build:content -->
```