var KrugerConsultaProcessos = SuperWidget.extend({
    init: function() {  	   	
	    var ds = DatasetFactory.getDataset('workflowProcess', null, null, null);
	    $("#badge_processos_" + this.instanceId).text(ds.values.length);
	    
	    for(var i = 0; i < ds.values.length; i++){
	    	if(i == 10){
	    		break;
	    	}
	    	
	    	else{
				$("#exibirProcessos_" + this.instanceId).append('<li class="list-group-item processos"><a href="http://devfluig.iv2.com.br/portal/p/giv2/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID='+ ds.values[i]["workflowProcessPK.processInstanceId"] +'" target="_blank">'+ ds.values[i].processId +' - Solicitante: '+ ds.values[i].requesterId +'</a></li>');
    		}
	    }
    },
  
    bindings: {
        local: {
            'filter': ['click_filter']
        },
        global: {}
    },
 
    filter: function() {
		var id = $('#filtrar_'+ this.instanceId).val();

		if(id == ""){
			var ds = DatasetFactory.getDataset('workflowProcess', null, null, null);
		}
		
    	else{
			var constraint = DatasetFactory.createConstraint('processId', id, id, ConstraintType.MUST);
			var ds = DatasetFactory.getDataset('workflowProcess', null, [constraint], null);
		}
	    
	    $("li").remove();
	    $("#exibirProcessos_" + this.instanceId).append('<li class="list-group-item active">Processos encontrados<span id="badge_processos_${instanceId}" class="badge badge-warning">'+ ds.values.length +'</span></li>');
	    
	    for(var i = 0; i < ds.values.length; i++){
    		$("#exibirProcessos_" + this.instanceId).append('<li class="list-group-item processos"><a href="http://devfluig.iv2.com.br/portal/p/giv2/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID='+ ds.values[i]["workflowProcessPK.processInstanceId"] +'" target="_blank">'+ ds.values[i].processId +' - Solicitante: '+ ds.values[i].requesterId +'</a></li>');
	    }
    }
});