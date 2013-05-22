define([
    'jquery'
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
        '<td><input type="button" class="btn" value="Save" /></td><td><input type="button" class="btn" value="Cancel" /></td></tr>').hide().fadeIn());
    });
    $('#manage').on('click','input[value="Save"]',function(e){
        //save now...
        $t = $(e.currentTarget).parent().parent();
        $t.fadeOut('fast',function(){$t.remove();});
    });
    $('#manage').on('click','input[value="Cancel"]',function(e){
        console.log('cancel clicked');
        $t = $(e.currentTarget).parent().parent();
        $t.fadeOut('fast',function(){$t.remove();});
    });
    $('#manage').on('dblclick','tr.editable',function(e){
        console.log('dblclick called for tr editable');
        $tr = $(e.currentTarget);
        $name = $tr.children('td:first');
        $desc = $tr.children('td:nth-child(2)');
        $name.data('name',$name.text());
        $desc.data('desc',$desc.text());
        $name.html('<input type="text" name="name" value="'+$name.data('name')+'" style="width:150px;" />');
        $desc.html('<input type="text" name="name" value="'+$desc.data('desc')+'" />');
        console.log($tr,$name,$desc);
    });
});