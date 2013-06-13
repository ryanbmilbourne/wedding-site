define([
    'jquery',
    'filedrop'
],function($){
    console.log('managerjs started');
    $('#manage input[name="Delete"]').on('click',function(e){
        $.ajax('/manager',{
            type:'DELETE',
            data: {'_id':$(e.currentTarget).data('id')},
            success: function(data){
                console.log(arguments);
                if(!data.err && data.count){
                    $t = $(e.currentTarget).parent().parent();
                    $t.fadeOut('fast',function(){$t.remove();});
                }
            },
            error: function(jqxhr,status,error){
                console.log(arguments);
            }
        });
    });
    $('#manage input[value="New"]').on('click',function(e){
        $('#manage table').append($('<tr><td><input type="text" name="name" placeholder="name" style="width:150px;" /></td>'+
        '<td><input type="text" name="desc" placeholder="description" /></td>'+
        '<td><input type="text" name="price" placeholder="price" /></td>'+
        '<td><input type="button" class="btn" value="Save" /></td><td><input type="button" class="btn" value="Cancel" /></td></tr>').hide().fadeIn());
    });
    $('#manage').on('click','input[value="Save"]',function(e){
        //save now...
        //e.preventDefault();
        $t = $(e.currentTarget).parent().parent();
        $t.fadeOut('fast',function(){$t.remove();});
    });
    $('#manage').on('click','input[value="Cancel"]',function(e){
        console.log('cancel clicked');
        $t = $(e.currentTarget).parent().parent();
        $t.fadeOut('fast',function(){$t.remove();});
    });
    $('#manage').on('click','input[name="delete-image"]',function(e){
        e.preventDefault();
        $.ajax('/manager',{
            type:'DELETE',
            data: {'_id':$(e.currentTarget).data('id'),member:'img'},
            success: function(data){
                console.log(arguments);
                if(!data.err && data.count){
                    $t = $(e.currentTarget).parent();
                    $t.html('No Image');
                }
            },
            error: function(jqhxr, status, error){
                console.log(arguments);
            }
        });
    });
    $('#manage').on('dblclick','tr.editable',function(e){
        console.log('dblclick called for tr editable');
        $tr = $(e.currentTarget);
        $name = $tr.children('td:first');
        $desc = $tr.children('td:nth-child(2)');
        $price = $tr.children('td:nth-child(3)');
        $name.data('name',$name.text());
        $desc.data('desc',$desc.text());
        $price.data('price',$price.text().replace('$',''));
        $name.html('<input type="text" name="name" value="'+$name.data('name')+'" style="width:150px;" />');
        $desc.html('<input type="text" name="name" value="'+$desc.data('desc')+'" />');
        $price.html('<input type="text" name="name" value="'+$price.data('price')+'" />');
        console.log($tr,$name,$desc,$price);
    });
    
    $('#manage').on('click','input[name="Upload"]',function(e){
        console.log('clicked on img upload button');
    });
    var regId, over = false;
    $('.fileDrop').text('Drop file here').filedrop({
        url : '/manager/upload',
        paramname: 'fileUpload',
        maxfilesize: 5,
        data: {
            id:function(){return regId;}
        },
        docOver: function(e){
            //console.log('docOver',e);
            if(!over){
                $('.fileDrop').css('border','1px dashed black');
            }
        },
        docLeave: function(e){
            //$('.fileDrop').css('border','1px dashed #000000');
            $('.fileDrop').css('border','none');
        },
        dragEnter: function(e){
            console.log(e);
            over = true;
            console.log($(e.currentTarget).data('id'));
            $(e.currentTarget).css('border', '2px dashed green');
        },
        dragLeave: function(e){
            //$('.fileDrop').css('border','2px dashed black');
            over = false;
        },
        drop: function(e){
            console.log('drop',e);
            regId = $(e.currentTarget).data('id');
            $('.fileDrop').css('border','none');
            over = false;
        },
        uploadStarted: function(i,file,len){
            console.log(arguments);
        },
        uploadFinished: function(i,file,response,time){
            console.log(arguments);
            if(response.imgPath && response.registry){
                $('tr[data-id="'+response.registry._id+'"] td.img').html('<img src="'+response.imgPath+'" style="width:100px;"><br><input type="button" class="btn btn-warning" data-id="'+response.registry._id+'" name="delete-image" value="Delete Image" />');
            }
        },
        progressUpdated: function(i,file,progress){
            
        },
        afterAll: function(e){
            console.log(arguments);
        }
    });
});