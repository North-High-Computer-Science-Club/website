const modal = document.getElementById('exampleModal');

modal.innerHTML = `
<div class="modal-dialog" role="document">
  <div class="modal-content" id="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="modal-title"></h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="close-modal">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <h4 id="result-count" id="result-count"></h4>
      <ul id="helpful-links">

      </ul>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
    </div>
  </div>
</div>
`;
