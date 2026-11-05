const simulations = [
 {id:"routing",cat:"Jaringan & Keamanan",icon:"🌐",accent:"#1976ff",title:"Simulasi Perutean OSPF",desc:"Lihat paket data memilih jalur dengan biaya terkecil pada jaringan.",demo:"routing"},
 {id:"ddos",cat:"Jaringan & Keamanan",icon:"🛡️",accent:"#ff3cac",title:"DDoS & Mitigasi Firewall",desc:"Amati trafik normal dan trafik serangan serta proses penyaringan.",demo:"ddos"},
 {id:"smarthome",cat:"Jaringan & Keamanan",icon:"🏠",accent:"#00b8d9",title:"Topologi Smart Home",desc:"Visualisasikan komunikasi perangkat IoT dalam rumah pintar.",demo:"routing"},
 {id:"token",cat:"Jaringan & Keamanan",icon:"🚦",accent:"#7b4dff",title:"Traffic Shaping Token Bucket",desc:"Pelajari pembatasan bandwidth dengan token bucket.",demo:"queue"},
 {id:"malware",cat:"Jaringan & Keamanan",icon:"🦠",accent:"#e52b86",title:"Penyebaran Malware",desc:"Modelkan penyebaran malware antar komputer dalam LAN.",demo:"network"},
 {id:"buffer",cat:"Jaringan & Keamanan",icon:"💾",accent:"#ff6b3d",title:"Buffer Overflow Edukatif",desc:"Pahami konsep kapasitas buffer dan data yang melampaui batas.",demo:"buffer"},
 {id:"tls",cat:"Jaringan & Keamanan",icon:"🔐",accent:"#008aa7",title:"Handshake Kriptografi",desc:"Ikuti tahapan autentikasi dan pertukaran kunci secara visual.",demo:"handshake"},
 {id:"dhcp",cat:"Jaringan & Keamanan",icon:"📡",accent:"#1976ff",title:"DHCP Discover–ACK",desc:"Simulasikan proses pemberian alamat IP otomatis.",demo:"dhcp"},
 {id:"subnet",cat:"Jaringan & Keamanan",icon:"🧩",accent:"#5a35c9",title:"Subnetting Visual",desc:"Pecah jaringan besar menjadi subnet secara interaktif.",demo:"subnet"},
 {id:"ids",cat:"Jaringan & Keamanan",icon:"👁️",accent:"#00a884",title:"Intrusion Detection System",desc:"Analisis paket dan deteksi pola serangan.",demo:"ids"},
 {id:"cpu",cat:"Sistem Operasi & Arsitektur",icon:"⚙️",accent:"#1976ff",title:"CPU Scheduling",desc:"Bandingkan FIFO, Round Robin, dan SJF dengan Gantt Chart.",demo:"cpu"},
 {id:"paging",cat:"Sistem Operasi & Arsitektur",icon:"🧠",accent:"#7b4dff",title:"Paging & Segmentation",desc:"Petakan alamat logis menuju frame memori fisik.",demo:"paging"},
 {id:"page",cat:"Sistem Operasi & Arsitektur",icon:"📄",accent:"#ff3cac",title:"Page Replacement",desc:"Bandingkan FIFO dan LRU dalam pengelolaan halaman.",demo:"queue"},
 {id:"producer",cat:"Sistem Operasi & Arsitektur",icon:"🔄",accent:"#00b8d9",title:"Producer–Consumer",desc:"Eksplorasi bounded-buffer, semaphore, dan mutex.",demo:"queue"},
 {id:"disk",cat:"Sistem Operasi & Arsitektur",icon:"💿",accent:"#ff6b3d",title:"Disk Scheduling",desc:"Visualisasikan FCFS, SCAN, dan C-SCAN.",demo:"disk"},
 {id:"banker",cat:"Sistem Operasi & Arsitektur",icon:"🏦",accent:"#008aa7",title:"Banker's Algorithm",desc:"Uji kondisi safe state pada alokasi resource.",demo:"banker"},
 {id:"interrupt",cat:"Sistem Operasi & Arsitektur",icon:"⚡",accent:"#e52b86",title:"Interrupt Handling",desc:"Lihat CPU merespons interupsi perangkat.",demo:"interrupt"},
 {id:"cache",cat:"Sistem Operasi & Arsitektur",icon:"🚀",accent:"#1976ff",title:"Cache Memory",desc:"Pelajari hit/miss pada L1 dan L2 cache.",demo:"cache"},
 {id:"pc",cat:"Sistem Operasi & Arsitektur",icon:"🖥️",accent:"#5a35c9",title:"Perakitan Komputer Virtual",desc:"Kenali komponen PC dan urutan perakitannya.",demo:"pc"},
 {id:"assembly",cat:"Sistem Operasi & Arsitektur",icon:"⌨️",accent:"#00a884",title:"Instruksi Assembly",desc:"Lihat perubahan register saat instruksi dijalankan.",demo:"assembly"},
 {id:"astar",cat:"AI & Data Science",icon:"🤖",accent:"#1976ff",title:"A* Pathfinding",desc:"Temukan jalur terpendek robot pada grid rintangan.",demo:"astar"},
 {id:"fsm",cat:"AI & Data Science",icon:"🎮",accent:"#7b4dff",title:"NPC Finite State Machine",desc:"Amati perpindahan state AI musuh dalam game.",demo:"fsm"},
 {id:"genetic",cat:"AI & Data Science",icon:"🧬",accent:"#e52b86",title:"Algoritma Genetika",desc:"Visualisasikan evolusi solusi menuju nilai optimum.",demo:"genetic"},
 {id:"nn",cat:"AI & Data Science",icon:"🧠",accent:"#00b8d9",title:"Neural Network Visualizer",desc:"Lihat node, bobot, dan aliran data jaringan saraf.",demo:"nn"},
 {id:"kmeans",cat:"AI & Data Science",icon:"📊",accent:"#ff6b3d",title:"K-Means Clustering",desc:"Amati titik data bergerak menuju sentroid.",demo:"kmeans"},
 {id:"fuzzy",cat:"AI & Data Science",icon:"🌡️",accent:"#008aa7",title:"Fuzzy Logic AC Pintar",desc:"Ubah suhu dan kelembapan menjadi keputusan kipas.",demo:"fuzzy"},
 {id:"recommend",cat:"AI & Data Science",icon:"🛒",accent:"#1976ff",title:"Rekomendasi E-Commerce",desc:"Simulasikan rekomendasi berbasis kemiripan preferensi.",demo:"recommend"},
 {id:"boids",cat:"AI & Data Science",icon:"🐟",accent:"#5a35c9",title:"Boids Flocking",desc:"Simulasikan gerakan kawanan secara alami.",demo:"boids"},
 {id:"car",cat:"AI & Data Science",icon:"🚗",accent:"#ff3cac",title:"Mobil Otonom Sederhana",desc:"Mobil virtual membaca sensor dan menghindari rintangan.",demo:"car"},
 {id:"chatbot",cat:"AI & Data Science",icon:"💬",accent:"#00a884",title:"Chatbot Decision Tree",desc:"Ikuti alur percakapan berdasarkan knowledge base.",demo:"chatbot"},
 {id:"queue",cat:"Logistik & Sistem Diskret",icon:"🏪",accent:"#1976ff",title:"Antrean Bank / Supermarket",desc:"Bandingkan waktu tunggu dan jumlah loket.",demo:"queue"},
 {id:"traffic",cat:"Logistik & Sistem Diskret",icon:"🚥",accent:"#ff3cac",title:"Lampu Lalu Lintas Pintar",desc:"Sesuaikan durasi lampu dengan kepadatan kendaraan.",demo:"traffic"},
 {id:"elevator",cat:"Logistik & Sistem Diskret",icon:"🛗",accent:"#7b4dff",title:"Elevator Car Simulation",desc:"Optimalkan perjalanan beberapa lift.",demo:"elevator"},
 {id:"supply",cat:"Logistik & Sistem Diskret",icon:"📦",accent:"#00b8d9",title:"Supply Chain Bullwhip",desc:"Lihat efek keterlambatan informasi pada rantai pasok.",demo:"supply"},
 {id:"factory",cat:"Logistik & Sistem Diskret",icon:"🏭",accent:"#ff6b3d",title:"Manufaktur Otomatis",desc:"Modelkan barang bergerak pada conveyor.",demo:"factory"},
 {id:"boarding",cat:"Logistik & Sistem Diskret",icon:"✈️",accent:"#008aa7",title:"Boarding Pesawat",desc:"Uji strategi pengisian kursi penumpang.",demo:"queue"},
 {id:"courier",cat:"Logistik & Sistem Diskret",icon:"🚚",accent:"#1976ff",title:"Distribusi Kurir",desc:"Cari rute armada dari gudang ke tujuan.",demo:"astar"},
 {id:"train",cat:"Logistik & Sistem Diskret",icon:"🚆",accent:"#5a35c9",title:"Kepadatan Penumpang Kereta",desc:"Simulasikan rush hour di peron.",demo:"queue"},
 {id:"inventory",cat:"Logistik & Sistem Diskret",icon:"📋",accent:"#e52b86",title:"Inventory Control",desc:"Tentukan reorder point sebelum stok habis.",demo:"inventory"},
 {id:"parking",cat:"Logistik & Sistem Diskret",icon:"🅿️",accent:"#00a884",title:"Automated Parking",desc:"Tempatkan kendaraan ke slot secara otomatis.",demo:"parking"},
 {id:"evac",cat:"Manajemen & Fasilitas",icon:"🚨",accent:"#ff3cac",title:"Evakuasi Bencana Gedung",desc:"Modelkan arus manusia menuju jalur keluar.",demo:"evac"},
 {id:"viral",cat:"Manajemen & Fasilitas",icon:"📱",accent:"#1976ff",title:"Penyebaran Informasi",desc:"Amati bagaimana informasi menyebar di jaringan sosial.",demo:"network"},
 {id:"library",cat:"Manajemen & Fasilitas",icon:"📚",accent:"#7b4dff",title:"Sistem Peminjaman Buku",desc:"Simulasikan siklus buku dan keterlambatan.",demo:"library"},
 {id:"igd",cat:"Manajemen & Fasilitas",icon:"🏥",accent:"#00b8d9",title:"Alur Pasien IGD",desc:"Modelkan triase dan beban kerja dokter.",demo:"queue"},
 {id:"quick",cat:"Manajemen & Fasilitas",icon:"🗳️",accent:"#ff6b3d",title:"Quick Count",desc:"Simulasikan masuknya sampel TPS dan kestabilan statistik.",demo:"quick"},
 {id:"rooms",cat:"Manajemen & Fasilitas",icon:"🏫",accent:"#008aa7",title:"Alokasi Ruang Kelas",desc:"Cari penjadwalan tanpa bentrokan.",demo:"rooms"},
 {id:"trading",cat:"Manajemen & Fasilitas",icon:"📈",accent:"#1976ff",title:"Virtual Trading",desc:"Latihan jual beli saham menggunakan data simulasi.",demo:"trading"},
 {id:"finance",cat:"Manajemen & Fasilitas",icon:"💰",accent:"#5a35c9",title:"Keuangan Pribadi",desc:"Lihat dampak investasi, inflasi, dan gaya hidup.",demo:"finance"},
 {id:"cinema",cat:"Manajemen & Fasilitas",icon:"🎬",accent:"#e52b86",title:"Kursi Bioskop",desc:"Visualisasi pemilihan kursi secara real-time.",demo:"parking"},
 {id:"auction",cat:"Manajemen & Fasilitas",icon:"🔨",accent:"#00a884",title:"Lelang Online",desc:"Simulasikan perang harga antar bidding bots.",demo:"auction"}
];

const $ = s => document.querySelector(s);
const grid = $("#simulationGrid"), search = $("#searchInput"), cat = $("#categorySelect");
const cats = [...new Set(simulations.map(s=>s.cat))];
cats.forEach(c=>cat.insertAdjacentHTML("beforeend",`<option>${c}</option>`));
$("#simCount").textContent = simulations.length + "+";

function render(){
  const q=search.value.toLowerCase().trim(), c=cat.value;
  const list=simulations.filter(s=>(c==="all"||s.cat===c)&&(s.title+s.desc+s.cat).toLowerCase().includes(q));
  grid.innerHTML=list.length?list.map(s=>`<article class="sim-card" style="--accent:${s.accent}" data-demo="${s.demo}" data-title="${s.title}">
    <div class="sim-icon">${s.icon}</div><h3>${s.title}</h3><p>${s.desc}</p><span class="tag">${s.cat}</span>
  </article>`).join(""):`<div class="empty">Tidak ada simulasi yang cocok. Coba kata kunci lain.</div>`;
  grid.querySelectorAll(".sim-card").forEach(el=>el.addEventListener("click",()=>openDemo(el.dataset.demo,el.dataset.title)));
}
search.addEventListener("input",render);cat.addEventListener("change",render);render();

const demoPanel=$("#demo"), demoContent=$("#demoContent"), demoTitle=$("#demoTitle");
$("#closeDemo").onclick=()=>demoPanel.classList.remove("active");

function shell(html, controls=""){
 return `<div class="demo-box"><div class="demo-layout"><div>${controls}</div><div class="canvas-wrap">${html}</div></div></div>`;
}
function canvas(id="simCanvas"){return `<canvas id="${id}" class="sim-canvas"></canvas>`}

function openDemo(type,title){
 demoPanel.classList.add("active");demoTitle.textContent=title;demoPanel.scrollIntoView({behavior:"smooth",block:"start"});
 const demos={
  routing(){demoContent.innerHTML=shell(canvas(),`<div class="control"><label>Jumlah node</label><input id="nodes" type="range" min="4" max="8" value="6"><output id="nodesOut">6</output></div><button class="btn btn-primary" id="run">▶ Jalankan paket</button>`); drawNetwork();$("#nodes").oninput=e=>{$("#nodesOut").textContent=e.target.value;drawNetwork()};$("#run").onclick=animateNetwork},
  ddos(){demoContent.innerHTML=shell(canvas(),`<div class="control"><label>Intensitas serangan</label><input id="attack" type="range" min="1" max="100" value="70"><output id="attackOut">70%</output></div><button class="btn btn-primary" id="run">🛡️ Mitigasi</button>`);drawDdos();$("#attack").oninput=e=>{$("#attackOut").textContent=e.target.value+"%";drawDdos()};$("#run").onclick=drawDdos},
  queue(){demoContent.innerHTML=shell(canvas(),`<div class="control"><label>Jumlah pelanggan</label><input id="customers" type="range" min="5" max="30" value="18"><output id="customersOut">18</output></div><button class="btn btn-primary" id="run">▶ Simulasikan</button>`);drawQueue();$("#customers").oninput=e=>{$("#customersOut").textContent=e.target.value;drawQueue()};$("#run").onclick=drawQueue},
  astar(){demoContent.innerHTML=shell(canvas(),`<div class="control"><label>Ukuran grid</label><input id="gridSize" type="range" min="8" max="18" value="12"><output id="gridOut">12×12</output></div><button class="btn btn-primary" id="run">🤖 Cari Jalur</button>`);drawAstar();$("#gridSize").oninput=e=>{$("#gridOut").textContent=e.target.value+"×"+e.target.value;drawAstar()};$("#run").onclick=drawAstar},
  kmeans(){demoContent.innerHTML=shell(canvas(),`<div class="control"><label>Jumlah cluster</label><input id="k" type="range" min="2" max="5" value="3"><output id="kOut">3</output></div><button class="btn btn-primary" id="run">📊 Jalankan K-Means</button>`);drawKmeans();$("#k").oninput=e=>{$("#kOut").textContent=e.target.value;drawKmeans()};$("#run").onclick=drawKmeans},
  cpu(){demoContent.innerHTML=shell(canvas(),`<div class="control"><label>Algoritma</label><select id="alg"><option>FCFS</option><option>SJF</option><option>Round Robin</option></select></div><button class="btn btn-primary" id="run">⚙️ Jadwalkan</button>`);drawCpu();$("#alg").onchange=drawCpu;$("#run").onclick=drawCpu},
  subnet(){demoContent.innerHTML=shell(canvas(),`<div class="control"><label>Prefix</label><select id="prefix"><option>/24</option><option>/25</option><option>/26</option><option>/27</option><option>/28</option></select></div>`);drawSubnet();$("#prefix").onchange=drawSubnet},
  dhcp(){demoContent.innerHTML=shell(canvas(),`<button class="btn btn-primary" id="run">📡 Jalankan DHCP</button>`);drawDhcp();$("#run").onclick=drawDhcp},
  fuzzy(){demoContent.innerHTML=shell(canvas(),`<div class="control"><label>Suhu (°C)</label><input id="temp" type="range" min="16" max="38" value="28"><output id="tempOut">28°C</output></div>`);drawFuzzy();$("#temp").oninput=e=>{$("#tempOut").textContent=e.target.value+"°C";drawFuzzy()}`},
  buffer(){demoContent.innerHTML=shell(canvas(),`<div class="control"><label>Data masuk</label><input id="data" type="range" min="1" max="150" value="80"><output id="dataOut">80 byte</output></div>`);drawBuffer();$("#data").oninput=e=>{$("#dataOut").textContent=e.target.value+" byte";drawBuffer()}`},
 };
 (demos[type]||demos.routing)();
}
function ctx(){const c=$("#simCanvas"),x=c.getContext("2d");c.width=c.clientWidth*devicePixelRatio;c.height=330*devicePixelRatio;x.scale(devicePixelRatio,devicePixelRatio);return {x,w:c.clientWidth,h:330}}
function clear(x,w,h){x.clearRect(0,0,w,h);x.fillStyle="#081f48";x.fillRect(0,0,w,h)}
function drawNetwork(){
 const {x,w,h}=ctx();clear(x,w,h);const n=+$("#nodes").value, pts=[];for(let i=0;i<n;i++){let a=i/n*Math.PI*2-Math.PI/2;pts.push([w/2+Math.cos(a)*Math.min(w,h)*.34,h/2+Math.sin(a)*100])}
 x.strokeStyle="#37b9ff55";x.lineWidth=3;for(let i=0;i<n;i++)for(let j=i+1;j<n;j++)if((i+j)%2===0){x.beginPath();x.moveTo(...pts[i]);x.lineTo(...pts[j]);x.stroke()}
 pts.forEach((p,i)=>{x.beginPath();x.arc(...p,22,0,7);x.fillStyle=i===0?"#ff3cac":"#1976ff";x.fill();x.fillStyle="#fff";x.font="bold 15px Arial";x.textAlign="center";x.fillText("R"+(i+1),p[0],p[1]+5)});
 x.fillStyle="#fff";x.font="bold 16px Arial";x.textAlign="left";x.fillText("OSPF: pilih jalur dengan total cost terendah",20,28);
}
function animateNetwork(){const c=$("#simCanvas"),x=c.getContext("2d");let t=0;const loop=()=>{drawNetwork();const {w,h}=ctx();const n=+$("#nodes").value;let a=-Math.PI/2+t/100,b=-Math.PI/2+(t/100+1/n)*Math.PI*2;const p1=[w/2+Math.cos(a)*Math.min(w,h)*.34,h/2+Math.sin(a)*100],p2=[w/2+Math.cos(b)*Math.min(w,h)*.34,h/2+Math.sin(b)*100];x.beginPath();x.arc(p1[0],p1[1],9,0,7);x.fillStyle="#fff";x.fill();t++;if(t<260)requestAnimationFrame(loop)};loop()}
function drawDdos(){const {x,w,h}=ctx();clear(x,w,h);let a=+$("#attack").value/100;for(let i=0;i<35;i++){let sy=30+i*8, ex=w*.62, ey=h/2+(i-17)*4;x.strokeStyle=i<35*a?"#ff3cac":"#42e5ff";x.globalAlpha=.65;x.beginPath();x.moveTo(20,sy);x.lineTo(ex,ey);x.stroke()}x.globalAlpha=1;x.fillStyle="#1976ff";x.fillRect(w*.62,h/2-65,110,130);x.fillStyle="#fff";x.font="bold 17px Arial";x.textAlign="center";x.fillText("SERVER",w*.62+55,h/2+5);x.fillStyle="#fff";x.font="bold 18px Arial";x.fillText(`Trafik serangan: ${Math.round(a*100)}%`,20,30);x.fillText(`Firewall: ${a>.6?"FILTER AKTIF":"MONITORING"}`,20,58)}
function drawQueue(){const {x,w,h}=ctx();clear(x,w,h);let n=+$("#customers").value;for(let i=0;i<n;i++){x.beginPath();x.arc(35+i*30,h/2,11,0,7);x.fillStyle=i%3===0?"#ff3cac":"#1976ff";x.fill()}x.fillStyle="#fff";x.font="bold 17px Arial";x.fillText(`Antrean = ${n} pelanggan`,20,35);x.fillText("Loket",w-90,h/2+6);x.fillStyle="#00d9ff";x.fillRect(w-105,h/2-45,85,90)}
function drawAstar(){const {x,w,h}=ctx();clear(x,w,h);let n=+$("#gridSize").value, size=Math.min(w-40,h-40)/n, path=[];for(let i=0;i<n;i++){path.push([i,Math.floor(i*.65)]);}for(let r=0;r<n;r++)for(let c=0;c<n;c++){x.strokeStyle="#ffffff18";x.strokeRect(20+c*size,20+r*size,size,size)}path.forEach(([r,c])=>{x.fillStyle="#00d9ff";x.fillRect(20+c*size+2,20+r*size+2,size-4,size-4)});x.fillStyle="#ff3cac";x.beginPath();x.arc(20+size/2,20+size/2,size*.3,0,7);x.fill();x.fillStyle="#fff";x.font="bold 16px Arial";x.fillText("A*: jalur terpendek",20,315)}
function drawKmeans(){const {x,w,h}=ctx();clear(x,w,h);let k=+$("#k").value;for(let i=0;i<80;i++){let cl=i%k, cx=80+cl*(w-160)/(k-1||1),cy=100+(cl%2)*100;let px=cx+(Math.random()-.5)*100,py=cy+(Math.random()-.5)*90;x.fillStyle=["#00d9ff","#ff3cac","#ffe45e","#7b4dff","#00d39b"][cl];x.beginPath();x.arc(px,py,4,0,7);x.fill()}x.fillStyle="#fff";x.font="bold 17px Arial";x.fillText(`K-Means • ${k} cluster`,20,30)}
function drawCpu(){const {x,w,h}=ctx();clear(x,w,h);let alg=$("#alg").value, arr=alg==="SJF"?["P2","P4","P1","P3"]:alg==="Round Robin"?["P1","P2","P3","P4","P1","P2"]:["P1","P2","P3","P4"];let cw=(w-50)/arr.length;arr.forEach((p,i)=>{x.fillStyle=["#1976ff","#7b4dff","#ff3cac","#00a884"][i%4];x.fillRect(25+i*cw,120,cw-4,70);x.fillStyle="#fff";x.font="bold 18px Arial";x.textAlign="center";x.fillText(p,25+i*cw+cw/2,160)});x.textAlign="left";x.fillText(`Gantt Chart — ${alg}`,25,90)}
function drawSubnet(){const {x,w,h}=ctx();clear(x,w,h);let p=+$("#prefix").value.slice(1),sub=2**(p-24),host=2**(32-p)-2;for(let i=0;i<sub;i++){let ww=(w-40)/sub;x.fillStyle=i%2?"#1976ff":"#7b4dff";x.globalAlpha=.8;x.fillRect(20+i*ww,110,ww-3,100);x.globalAlpha=1;x.fillStyle="#fff";x.font="bold 14px Arial";x.textAlign="center";x.fillText("SUBNET "+(i+1),20+i*ww+ww/2,150);x.fillText(`${host} host`,20+i*ww+ww/2,175)}x.textAlign="left";x.fillText(`192.168.1.0${p===24?"":"/"+p} • ${sub} subnet • ${host} host/subnet`,20,60)}
function drawDhcp(){const {x,w,h}=ctx();clear(x,w,h);["DISCOVER","OFFER","REQUEST","ACK"].forEach((s,i)=>{let xx=30+i*(w-60)/3;x.fillStyle="#1976ff";x.fillRect(xx-40,130,80,50);x.fillStyle="#fff";x.font="bold 13px Arial";x.textAlign="center";x.fillText(s,xx,160);if(i<3){x.strokeStyle="#00d9ff";x.lineWidth=3;x.beginPath();x.moveTo(xx+45,155);x.lineTo(xx+(w-60)/3-45,155);x.stroke()}});x.textAlign="left";x.fillText("DHCP handshake: client meminta IP → server menawarkan → client meminta → server mengakui",20,70)}
function drawFuzzy(){const {x,w,h}=ctx();clear(x,w,h);let t=+$("#temp").value, speed=Math.max(0,Math.min(100,(t-18)*5.2));x.fillStyle="#fff";x.font="bold 18px Arial";x.fillText(`Suhu ${t}°C → Kecepatan kipas ${Math.round(speed)}%`,20,45);x.fillStyle="#00d9ff";x.fillRect(30,130,(w-60)*speed/100,55);x.strokeStyle="#fff";x.strokeRect(30,130,w-60,55)}
function drawBuffer(){const {x,w,h}=ctx();clear(x,w,h);let d=+$("#data").value,cap=100;x.fillStyle="#fff";x.font="bold 18px Arial";x.fillText(`Kapasitas buffer: ${cap} byte • Data: ${d} byte`,20,50);x.strokeStyle="#fff";x.strokeRect(30,120,w-60,70);x.fillStyle=d>cap?"#ff3cac":"#00d9ff";x.fillRect(32,122,(w-64)*Math.min(d,cap)/cap,66);if(d>cap){x.fillStyle="#ff3cac";x.fillText("⚠ Buffer Overflow",30,235)}}
render();