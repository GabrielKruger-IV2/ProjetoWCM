<div id="KrugerConsultaProcessos_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide"
     data-params="KrugerConsultaProcessos.instance()">
	<div class="panel panel-default">
	    <div class="panel-heading" style="margin-top: -20px">
			<h2>Consultar processos</h2>
		</div>
	
	    <div class="panel-body">
			<div class="row">
				<div class="col-md-4">
					<label for="nome">Filtrar por ID</label>
			    	<input name="filtrar_${instanceId}" id="filtrar_${instanceId}" class="form-control"/>
			    </div>
			</div>
			
			<br>
			
			<div class="row">			    
			    <div class="col-md-4">
			    	<button type="submit" class="btn btn-primary" data-filter>Filtrar</button>
		        </div>
			</div>
			
			<br>
			<br>
	        
	        <div class="row">		        
		        <div class="col-md-4">
			    	<ul id="exibirProcessos_${instanceId}" class="list-group">
			    		<li class="list-group-item active">
			    			Processos encontrados
			    			<span id="badge_processos_${instanceId}" class="badge badge-warning">0</span>
			    		</li>
			    	</ul>
			    </div>
			</div>	 
	    </div>
	</div>
</div>
<script type="text/javascript" src="/webdesk/vcXMLRPC.js"></script>