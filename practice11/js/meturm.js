$(document).ready(function(){
    $('button').on('click',function(){
        var url="https://pixabay.com/api/?key=14010091-6fc887d8f179a5dc0fe818556&q=yellow+flower&image_type=photo&pretty=true";
        $.ajax({
            dataType:"json",
            url:url,
            success:function(data){
                var result="";
                var counter = 0;
                data.hits.forEach(element => {
                    if(counter < 5 ){
                        result +=`
                    <div class="card shadow-lg mt-4">
                        <div class="card-header">
                        <img src="${element.userImageURL}" class="img-fluid rounded-circle " width="50">
                        &nbsp${element.user}
                        <button class="btn btn-danger btn-danger float-right" data-toggle="modal"data-target="#myModal${element.id}">View</button>
                        </div>
                        <div class="card-body">
                            <img src="${element.largeImageURL}" class="img-fluid">
                        </div>
                    </div>


                    <!-- The Modal -->
                    <div class="modal fade" id="myModal${element.id}">
                      <div class="modal-dialog">
                        <div class="modal-content">
                        
                          <!-- Modal Header -->
                          <div class="modal-header">
                            <h4 class="modal-title">Modal Heading</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                          </div>
                          
                          <!-- Modal body -->
                          <div class="modal-body">
                          <img src="${element.largeImageURL}" class="img-fluid">
                          </div>
                        <ul class="list-group list-group-horizontal  float-left">
                        <li class="list-group-item">
                        ${element.likes}
                        &nbsp
                            <i class="material-icons float-right text-danger">thumb_up</i>
                        </li>
                        <li class="list-group-item">
                        ${element.comments}
                        &nbsp
                            <i class="material-icons float-right text-info">comment</i>
                        </li>
                        <li class="list-group-item">
                        ${element.favorites}
                        &nbsp
                            <i class="material-icons float-right text-success">favorite_border</i>
                        </li>
                        <li class="list-group-item">
                        ${element.user_id}
                        &nbsp
                            <i class="material-icons float-right text-danger">visibility_off</i>
                        </li>
                    </ul>
                    <hr>

                        </div>
                      </div>
                    </div>
                    `;
                    counter++;
                    }
                });
                $('#card').append(result);
            }
        });
    });
});