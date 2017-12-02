	$(document).ready(function(){
		$.getJSON("result.json", function(data){
			var goresult1='';
			$.each(data, function(key,value){
				goresult1+= '<tr>';
				goresult1+= '<td>'+value.uid+'</td>';
				goresult1+= '<td>'+value.src+'</td>';
				goresult1+= '<td>'+value.dest+'</td>';
				goresult1+= '<td>'+value.dist+'</td>';
				goresult1+= '<td>'+value.seats_sl+'</td>';
				goresult1+= '<td>'+value.seats_3ac+'</td>';
				goresult1+= '<td>'+value.seats_2ac+'</td>';
				goresult1+= '<td>'+value.src_time+'</td>';
				goresult1+= '<td>'+value.dest_time+'</td>';
				goresult1+= '<td>'+value.mame+'</td>';
				goresult1+= '</tr>'
			});
			$('#goresult').append(goresult1);
		});
	});