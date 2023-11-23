var vinos=[]

// funcion para dar de ingresar vinos
function alta()
{
	
	if(faltanDatos()== false)
	{
		alert("la informacion esta incompleta")
		
	}
	else
	{
	var id 	= document.getElementById("id").value
		var i = buscar(id);
		
		if(i != -1)
		{
			alert("Vino ya se encuentra en la lista.")
		}
		else
		{
	var cepa = document.getElementById("cepa").value
	var bodega = document.getElementById("bodega").value
	var stock = document.getElementById("stock").value
	var precio = document.getElementById("precio").value
		
		vinos.push( {Id     : id,
					Cepa    : cepa,
				    Bodega  : bodega,
					Stock   : stock,
					Precio  : precio})
			        mostrar()
			alert("Ingresado con exito")
		}
	}		
}	
	
	//funcion para eliminar vinos
	function baja()
{
	var id = document.getElementById("id").value;
	if(id == " ")
	{
		alert("debe seleccionar un vino de la lista")
	}
	else
	{
		var i = buscar(id);
		if(i != -1)
		{
			vinos.splice(i,1);
			limpiar();
			mostrar()
			alert("Vino eliminado")
		}
		else
		{
			alert("Vino no existe en la lista")
		}	
	}
}

//funcion para modificar vinos 
function modificar()
{
	var id = document.getElementById("id").value;
	if(id == " ")
	{
		alert("debe seleccionar un vino de la lista")
	}
	else
	{
		var i = buscar(id);
		if(i != -1)
		{
			vinos[i].Cepa = document.getElementById("cepa").value
			vinos[i].Bodega = document.getElementById("bodega").value
			vinos[i].Stock = document.getElementById("stock").value
			vinos[i].Precio = document.getElementById("precio").value
		
			limpiar()
			mostrar()
			alert("Vino modificado con exito")
		}
		else
		{
			alert("Vino no existe en la lista")	
		}
	}
}


	
//funcion que permite mostar los vinos en la base de datos	
	function mostrar()
{
	var lista= document.getElementById("lista")
	
	lista.innerHTML = "";
	
	for(i = 0; i<vinos.length; i++)
	{
		var renglon = document.createElement("option");
		
		renglon.text =  vinos[i].Id + " " +
						vinos[i].Cepa+ " " +
						vinos[i].Bodega+ " " +
						vinos[i].Stock+ " " +
						vinos[i].Precio
		lista.add(renglon)		
	}	
}


//function que compruba si hay informacion en las casillas de ingreso de datos, si no hay muestra un mensaje
function faltanDatos()
{
	if(document.getElementById("id").value == "" ||
	   document.getElementById("cepa").value == "" ||
	   document.getElementById("bodega").value == "" ||
	   document.getElementById("stock").value == "" ||
	   document.getElementById("precio").value == "")	
	{
		return false;
	}
	else
	{
		return true;
	}	
}
//function que no permite vinos con el mismo id 
function buscar(id)
{
	if(vinos.length > 0 )	
	{
		for(var i = 0;i<vinos.length; i++)
		{
			if(vinos[i].Id ==id)
			{
				return i; 
			}
		}	
		return -1 
	}
	else
	{
		return-1
	}	
}
	
	
//function que permite limpiar los cuadros de entrada de texto
function limpiar()
{
 document.getElementById("castillo").reset();

}

//function que permite rellenar los cuadros de texto con la informacion en la "base de datos" 
function seleccionar()
{
	var lista = document.getElementById("lista")
	var indice = lista.selectedIndex;
	
	document.getElementById("id").value  =vinos[indice].Id
	document.getElementById("cepa").value  =vinos[indice].Cepa
	document.getElementById("stock").value  =vinos[indice].Stock
	document.getElementById("precio").value  =vinos[indice].Precio
	document.getElementById("bodega").value  =vinos[indice].Bodega
}


//function que muestra la bodega que tiene el vino más barato
function vinoBarato()
{
	var menor = 10000;
	for(var i = 0; i<vinos.length; i++)
	{
		if(vinos[i].Precio < menor)
		{
			menor = vinos[i].Precio
			bodega = vinos[i].Bodega
		}
	}
alert("La bodega que tiene el vino más barato es "+ bodega + " y su precio es de: " + menor)
	
}


//function que muestra la cepa que tiene el vino más caro 
function vinoCaro()
{
	var mayor = 0;
	for(var i = 0; i<vinos.length; i++)
	{
		if(vinos[i].Precio > mayor)
		{
			mayor = vinos[i].Precio
			cepa = vinos[i].Cepa
		}
	}
alert("La cepa que tiene el vino más caro es "+ cepa + " y su precio es de: " + mayor)
	
}


//funcion que permite consultar stock introduciendo bodega y cepa
 function constock()
 {
	 var cepa = prompt("Ingrese una cepa")
	 var bodega = prompt("Ingrese una bodega")
	 
	 for(var i =0; i<vinos.length; i++)
	 {
		 if(vinos[i].Cepa == cepa && vinos[i].Bodega == bodega)
		 {
		 var stock = vinos[i].Stock
		 alert("De la bodega: " + bodega + " y de su cepa: " + cepa + " su stock es: " + stock)
		 }
		 
	 }
	 
 }
 
 
 //function que solo permite el ingreso de numeros en las casillas ID Stock y precio
 function isNumberKey(evt)
 {
	 var charCode = (evt.which) ? evt.which : event.keyCode;
	 return !(charCode >31 && (charCode<48 || charCode >57))
	 
 }