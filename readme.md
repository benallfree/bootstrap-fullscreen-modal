# Full Screen Modal Dialogs for Bootstrap

Ever wanted that modal dialog to take up the whole screen? This plugin does it. It even supports a scrollable body region so your modal footer stays where you expect it to.

Features:

* Full screen modal dialog
* Scrollable body region
* Resizes with window

## Quickstart

See the [Codepen demo](http://codepen.io/benallfree/pen/vyxqGM).

    npm require --save-dev bootstrap-modal-fullscreen

This plugin requires Bootstrap 3 or 4 and jQuery

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.5/css/bootstrap.min.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.5/js/bootstrap.js"></script>

Then:

    <script src="https://cdn.jsdelivr.net/bootstrap-modal-fullscreen/1.0.3/bootstrap-modal-fullscreen.min.js"></script>


## Usage

In most cases, you need only add `.modal-fullscreen` to your modal dialog:


    <div class="modal fade modal-fullscreen" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">Modal title</h4>
          </div>
          <div class="modal-body">
            Some great content
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

For special cases, you may need to enable full screen viewing programatically. In that case, add `.modal-fullscreen` to your dialog as usual, then call:

    $('#myModal').fullscreen();

## Building

gulp
