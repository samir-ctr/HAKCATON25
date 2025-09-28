
(function(){
  const cont=document.getElementById('reservasGrid'); const reservas=DATA.reservas;
  cont.innerHTML = reservas.map(r=>`<div class="col-md-6"><div class="card card-reserve"><img src="${r.imagen}" class="card-img-top"><div class="card-body"><h5>${r.nombre}</h5><div class="small text-muted">${r.ciudad}</div><div class="mt-1">${formatUSD(r.precio)} / persona</div><a class="btn btn-brand mt-2" href="reservar.html?reserva=${r.id}">Ver detalles</a></div></div></div>`).join('');
  const top = document.getElementById('topAves'); if(top){ DATA.aves.slice(0,5).forEach((a,i)=>{ const li=document.createElement('li'); li.className='list-group-item'; li.textContent = `${i+1}. ${a.nombre}`; top.appendChild(li) }) }
  // Mini-mapa: usamos el mismo componente SVG de mapa.js, pero en altura menor
})();