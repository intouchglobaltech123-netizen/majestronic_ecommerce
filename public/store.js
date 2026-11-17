(function(){
/* ---------- CONFIG: replace with your own details ---------- */
const BRAND={
  name:'Majestronicz',
  phone:'+91 63795 60289',
  email:'majestroniczonline@gmail.com',
  hours:'Monday to Saturday, 10:00 AM to 8:00 PM. Closed Sundays.',
  jurisdiction:'the courts located in Erode, Tamil Nadu',
  address:'10, Nachiappa 2nd St, Natchiyappa Colony, Kottai, Erode 638001, Tamil Nadu'
};

/* ---------- PRODUCT ART (inline SVG, 120x90) ---------- */
const COP='#d9a066',CRM='#fff0d9',COR='#ffc24a',TEAL='#5ad1c0',NAV='#16264a',DK='#0a1021';
const pins=(x,y,n,dx,vert)=>Array.from({length:n},(_,i)=>vert?`<rect x="${x}" y="${y+i*dx}" width="5" height="2.2" fill="${COP}"/>`:`<rect x="${x+i*dx}" y="${y}" width="2.2" height="5" fill="${COP}"/>`).join('');
const pcb=(w,h,c=NAV)=>`<rect x="${(120-w)/2}" y="${(90-h)/2}" width="${w}" height="${h}" rx="5" fill="${c}" stroke="${COP}" stroke-width="1.2"/>`;
const ART={
  cap:()=>`<path d="M60 20c-17 0-26 12-26 26s9 20 26 20 26-6 26-20-9-26-26-26z" fill="#d89a4d"/><path d="M60 20c-10 2-17 12-17 26" fill="none" stroke="#f3c488" stroke-width="3"/><path d="M52 66v20M68 66v20" stroke="#c9ccd6" stroke-width="2.4"/><text x="60" y="50" text-anchor="middle" font-family="monospace" font-size="12" fill="#5a3512">104</text>`,
  volt:()=>`${pcb(94,50,'#111a31')}<rect x="22" y="28" width="76" height="34" rx="3" fill="#050913"/><g font-family="monospace" font-weight="700" font-size="22" fill="#ff4d4d"><text x="28" y="55" letter-spacing="3">12.4</text></g><circle cx="94" cy="58" r="2" fill="#ff4d4d"/>`,
  ultra:()=>`${pcb(100,52,'#1b4d8f')}<g><circle cx="38" cy="45" r="17" fill="#cfd3dc"/><circle cx="38" cy="45" r="12" fill="#2a3040"/><circle cx="82" cy="45" r="17" fill="#cfd3dc"/><circle cx="82" cy="45" r="12" fill="#2a3040"/></g><rect x="53" y="38" width="14" height="14" rx="1" fill="${DK}"/>${pins(46,66,8,4)}`,
  module:v=>{const top={ir:`<circle cx="38" cy="40" r="7" fill="#f6f2ea"/><circle cx="60" cy="40" r="7" fill="#2a3040" stroke="#888"/><circle cx="82" cy="46" r="4" fill="${COR}"/>`,ldr:`<circle cx="46" cy="42" r="12" fill="#c98b4c"/><path d="M40 38h12M40 42h12M40 46h12" stroke="#5a3512" stroke-width="1.4"/><circle cx="82" cy="46" r="4" fill="${COR}"/>`,level:`<rect x="36" y="22" width="48" height="40" rx="2" fill="#e6e0d0"/><path d="M42 26v32M50 26v32M58 26v32M66 26v32M74 26v32" stroke="${COP}" stroke-width="3"/>`,pir:`<circle cx="60" cy="42" r="19" fill="#f3f3f0" stroke="#bbb"/><path d="M60 26v32M44 42h32M49 31l22 22M71 31l-22 22" stroke="#d6d6d0" stroke-width=".8"/>`,gas:`<circle cx="60" cy="42" r="20" fill="#9aa1af"/><circle cx="60" cy="42" r="16" fill="#2a3040" stroke="#c9ccd6" stroke-dasharray="2 2"/><circle cx="60" cy="42" r="5" fill="#9aa1af"/>`,soil:`<rect x="14" y="30" width="54" height="30" rx="4" fill="#1d2a4a"/><path d="M68 34h40l8 8-8 8H68z" fill="#caa05a"/><path d="M76 38v8M84 38v8M92 38v8" stroke="#8a6a35" stroke-width="2"/>`};return `${v==='soil'?'':pcb(96,58,'#17335c')}${top[v]}${v==='soil'?'':pins(40,68,6,6)}`},
  pump:()=>`<rect x="20" y="28" width="52" height="34" rx="6" fill="#2d3550" stroke="#9aa1af"/><circle cx="46" cy="45" r="11" fill="#0a1021" stroke="${TEAL}" stroke-width="2"/><path d="M72 40h22v8H72z" fill="#4aa8d8"/><path d="M94 36h10v16H94z" fill="#4aa8d8"/><path d="M26 62v10M34 62v10" stroke="${COR}" stroke-width="2"/>`,
  gun:()=>`<path d="M22 28h52a14 14 0 0 1 14 14v6H70v-8H22z" fill="#2b3350"/><path d="M70 40h30v8H70z" fill="#c9ccd6"/><path d="M100 41l12 3-12 3z" fill="${COR}"/><path d="M34 40h18l-6 40H30z" fill="#0f1730" stroke="${COP}"/><rect x="28" y="30" width="14" height="8" fill="${COR}"/>`,
  mat:()=>`<rect x="10" y="12" width="100" height="66" rx="8" fill="#1d5bbf"/><rect x="38" y="22" width="44" height="46" rx="4" fill="#14357a"/>${[0,1,2].map(i=>`<circle cx="${20+i*0}" cy="${24+i*18}" r="6" fill="#0d2a63"/><circle cx="${100}" cy="${24+i*18}" r="6" fill="#0d2a63"/>`).join('')}`,
  mist:()=>`<ellipse cx="60" cy="58" rx="40" ry="14" fill="#c9ccd6"/><ellipse cx="60" cy="54" rx="30" ry="9" fill="#e8ebf0"/><circle cx="60" cy="54" r="5" fill="#8a93a5"/><path d="M46 38c-6-8 6-10 0-18M60 36c-6-8 6-10 0-20M74 38c-6-8 6-10 0-18" fill="none" stroke="${TEAL}" stroke-width="2.4" stroke-linecap="round"/>`,
  solar:()=>`<path d="M18 74L34 18h76l-16 56z" fill="#12306b" stroke="#c9ccd6" stroke-width="3"/>${[1,2,3].map(i=>`<path d="M${18+i*8} ${74-i*18}L${34+i*8+ (i*-1)} ${18}" stroke="none"/>`).join('')}<path d="M26 56h76M30 38h76M56 18l-16 56M82 18l-16 56" stroke="#5f8ad6" stroke-width="1"/>`,
  drone:()=>`<path d="M30 24l60 42M90 24L30 66" stroke="#caa05a" stroke-width="5" stroke-linecap="round"/><rect x="48" y="36" width="24" height="18" rx="4" fill="#e6c78a" stroke="#8a6a35"/>${[[30,24],[90,24],[30,66],[90,66]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="13" fill="none" stroke="${CRM}" stroke-width="1.6" stroke-dasharray="4 3"/><circle cx="${x}" cy="${y}" r="3.2" fill="${COR}"/>`).join('')}`,
  spool:()=>`<ellipse cx="60" cy="44" rx="34" ry="30" fill="#8e96a6"/><ellipse cx="60" cy="44" rx="26" ry="22" fill="#c9ccd6"/><circle cx="60" cy="44" r="8" fill="${DK}"/><path d="M60 44m-14 0a14 14 0 1 0 28 0" fill="none" stroke="#e6e0d0" stroke-width="2" stroke-dasharray="3 2"/>`,
  cell:()=>`<rect x="18" y="26" width="84" height="38" rx="10" fill="#2f6fd6"/><rect x="94" y="36" width="12" height="18" rx="3" fill="#c9ccd6"/><rect x="18" y="26" width="18" height="38" rx="9" fill="${COR}"/><text x="60" y="50" text-anchor="middle" font-family="monospace" font-size="11" fill="#fff" font-weight="700">3.7V 18650</text>`,
  wire:()=>`<path d="M10 30c30-20 50 26 100-6" fill="none" stroke="#e23b3b" stroke-width="7" stroke-linecap="round"/><path d="M10 52c30-20 50 26 100-6" fill="none" stroke="#10131c" stroke-width="7" stroke-linecap="round"/><path d="M10 30c30-20 50 26 100-6M10 52c30-20 50 26 100-6" fill="none" stroke="#ffffff22" stroke-width="2"/>`,
  chassis:()=>`<rect x="14" y="22" width="92" height="46" rx="5" fill="#9aa1af" stroke="#d0d4dd"/>${[0,1,2,3,4,5].map(i=>`<circle cx="${28+i*13}" cy="45" r="2.6" fill="${DK}"/>`).join('')}<rect x="10" y="14" width="22" height="10" rx="4" fill="#0a1021"/><rect x="88" y="14" width="22" height="10" rx="4" fill="#0a1021"/><rect x="10" y="66" width="22" height="10" rx="4" fill="#0a1021"/><rect x="88" y="66" width="22" height="10" rx="4" fill="#0a1021"/>`,
  shield:()=>`${pcb(100,58,'#17335c')}<g fill="${DK}"><rect x="18" y="26" width="84" height="6"/><rect x="18" y="58" width="84" height="6"/></g>${pins(22,27,16,5)}${pins(22,59,16,5)}<rect x="48" y="38" width="24" height="12" fill="#0f1730" stroke="${COP}"/>`,
  speaker:()=>`<circle cx="60" cy="45" r="36" fill="#9aa1af"/><circle cx="60" cy="45" r="29" fill="#1a2036"/><circle cx="60" cy="45" r="18" fill="#2e3756"/><circle cx="60" cy="45" r="7" fill="#101830"/><circle cx="22" cy="45" r="3" fill="${COP}"/><circle cx="98" cy="45" r="3" fill="${COP}"/>`,
  usbc:()=>`${pcb(70,50,'#6a2a6a')}<rect x="38" y="20" width="44" height="22" rx="8" fill="#c9ccd6" stroke="#8a93a5"/><rect x="46" y="27" width="28" height="8" rx="4" fill="${DK}"/>${pins(40,56,6,6)}`,
  board:v=>{const w=v==='xiao'?70:96,h=v==='xiao'?54:60;const body={esp:`<rect x="30" y="16" width="50" height="22" rx="2" fill="#c9ccd6"/><text x="55" y="31" text-anchor="middle" font-family="monospace" font-size="7" fill="#1a2036">ESP32-S3</text><rect x="86" y="30" width="12" height="16" rx="2" fill="#d0d4dd"/>${pins(24,64,14,5.2)}${pins(24,22,0,5)}`,xiao:`<rect x="38" y="18" width="30" height="26" rx="2" fill="#c9ccd6"/><rect x="44" y="52" width="20" height="8" rx="2" fill="#d0d4dd"/><circle cx="82" cy="34" r="3" fill="${TEAL}"/>${pins(30,64,10,4.8)}`,cam:`<rect x="26" y="20" width="40" height="22" rx="2" fill="#c9ccd6"/><circle cx="86" cy="42" r="14" fill="#0a1021" stroke="#c9ccd6" stroke-width="2"/><circle cx="86" cy="42" r="7" fill="#26335a"/>${pins(22,62,14,5.2)}`};return `${pcb(w,h)}${body[v]}`},
  ic:()=>`<rect x="30" y="26" width="60" height="34" rx="3" fill="#161a24" stroke="#444a5a"/><circle cx="38" cy="34" r="2.4" fill="#444a5a"/><text x="60" y="48" text-anchor="middle" font-family="monospace" font-size="11" fill="#c9ccd6">LM393N</text>${Array.from({length:4},(_,i)=>`<rect x="${36+i*14}" y="18" width="4" height="8" fill="#c9ccd6"/><rect x="${36+i*14}" y="60" width="4" height="8" fill="#c9ccd6"/>`).join('')}`,
  motor:()=>`<rect x="18" y="28" width="52" height="32" rx="4" fill="#f2c230"/><rect x="70" y="24" width="30" height="40" rx="3" fill="#f2c230" stroke="#b8901c"/><circle cx="84" cy="44" r="9" fill="#2a2f3d"/><rect x="100" y="40" width="10" height="8" fill="#c9ccd6"/><path d="M18 40h-8M18 48h-8" stroke="${COR}" stroke-width="2"/>`,
  wood:v=>{const W='#c9965a',D='#8a5a2b',L='#e7c48f';const top={uv:`<rect x="38" y="20" width="44" height="30" rx="3" fill="${W}" stroke="${D}"/><rect x="46" y="26" width="28" height="8" rx="2" fill="#6c4dff"/><path d="M60 34v10" stroke="#a78bff" stroke-width="3"/>`,treb:`<path d="M40 70L60 22L80 70" fill="none" stroke="${W}" stroke-width="6"/><path d="M34 32L92 46" stroke="${L}" stroke-width="5"/><circle cx="92" cy="50" r="6" fill="${D}"/>`,ball:`<path d="M30 30h60M36 44h48M30 58h60" stroke="${W}" stroke-width="5"/><circle cx="52" cy="25" r="5" fill="#c9ccd6"/><circle cx="72" cy="39" r="5" fill="#c9ccd6"/>`,star:`<path d="M60 18l6 14 15 1-12 9 4 15-13-8-13 8 4-15-12-9 15-1z" fill="${W}" stroke="${D}"/><circle cx="60" cy="38" r="4" fill="${COR}"/>`,sat:`<circle cx="60" cy="38" r="14" fill="${W}" stroke="${D}"/><path d="M46 44L24 66M74 44l22 22M54 50L44 76M66 50l10 26" stroke="${L}" stroke-width="3"/>`,jcb:`<rect x="26" y="40" width="40" height="18" rx="2" fill="${W}"/><path d="M60 42L80 24l14 18" fill="none" stroke="${L}" stroke-width="6"/><rect x="88" y="40" width="12" height="10" fill="${D}"/>`,slope:`<path d="M24 62L60 30L96 62" fill="none" stroke="${W}" stroke-width="5"/><path d="M28 62L60 36L92 62" fill="none" stroke="${L}" stroke-width="3"/><circle cx="60" cy="30" r="5" fill="#c9ccd6"/>`,car:`<path d="M34 34h52l-26-14z" fill="${L}"/><path d="M60 34v28" stroke="${D}" stroke-width="4"/><circle cx="40" cy="48" r="5" fill="${COR}"/><circle cx="80" cy="48" r="5" fill="${TEAL}"/>`,coin:`<rect x="42" y="18" width="36" height="44" rx="4" fill="${W}" stroke="${D}"/><circle cx="54" cy="32" r="4" fill="${D}"/><circle cx="66" cy="32" r="4" fill="${D}"/><rect x="52" y="44" width="16" height="4" fill="${D}"/>`,rack:`<path d="M30 24v42M90 24v42M30 30h60M30 42h60M30 54h60" stroke="${W}" stroke-width="4"/>`};return `<rect x="16" y="66" width="88" height="10" rx="2" fill="${D}"/>${top[v]}`},
  wheel:()=>`<circle cx="44" cy="45" r="26" fill="#111522"/><circle cx="44" cy="45" r="15" fill="#f2c230"/><circle cx="44" cy="45" r="4" fill="#111522"/><circle cx="86" cy="45" r="20" fill="#111522"/><circle cx="86" cy="45" r="11" fill="#ff7a1a"/><circle cx="86" cy="45" r="3" fill="#111522"/>`,
  res:()=>`<path d="M8 45h28M84 45h28" stroke="#c9ccd6" stroke-width="3"/><rect x="34" y="34" width="52" height="22" rx="10" fill="#e7c48f"/><rect x="44" y="34" width="5" height="22" fill="#8a3b12"/><rect x="55" y="34" width="5" height="22" fill="#111"/><rect x="66" y="34" width="5" height="22" fill="#d83b3b"/><rect x="77" y="34" width="4" height="22" fill="#d9a066"/>`,
  led:()=>[['#ff4d4d',30],['#ffd23f',60],['#3ddc84',90]].map(([c,x])=>`<path d="M${x-9} 52v-18a9 9 0 0 1 18 0v18z" fill="${c}" opacity=".9"/><rect x="${x-11}" y="50" width="22" height="5" rx="1" fill="${c}"/><path d="M${x-4} 55v24M${x+4} 55v18" stroke="#c9ccd6" stroke-width="2"/>`).join(''),
  lipo:()=>`<rect x="18" y="24" width="76" height="42" rx="6" fill="#d8dbe3"/><rect x="22" y="28" width="68" height="34" rx="4" fill="#ff7a1a"/><text x="56" y="50" text-anchor="middle" font-family="monospace" font-size="10" font-weight="700" fill="#fff">2200mAh</text><path d="M94 36h16M94 52h16" stroke="#d83b3b" stroke-width="3"/>`,
  oled:()=>`${pcb(84,62,'#1b4d8f')}<rect x="28" y="22" width="64" height="40" rx="2" fill="#050913"/><path d="M34 32h30M34 40h44M34 48h22" stroke="#5ad1c0" stroke-width="3"/>${pins(46,70,4,8)}`,
  jumper:()=>['#d83b3b','#ffd23f','#3ddc84','#4f8dff','#a78bff','#ff7a1a'].map((c,i)=>`<path d="M${20+i*6} 20c10 30 40 30 ${70-i*4} ${50-i*2}" fill="none" stroke="${c}" stroke-width="4" stroke-linecap="round"/>`).join(''),
  prop:()=>`<ellipse cx="38" cy="45" rx="30" ry="7" fill="#111522" transform="rotate(-25 38 45)"/><ellipse cx="82" cy="45" rx="30" ry="7" fill="#111522" transform="rotate(25 82 45)"/><circle cx="60" cy="45" r="7" fill="#c9ccd6"/>`,
  castor:()=>`<circle cx="60" cy="52" r="24" fill="#c9ccd6"/><circle cx="52" cy="44" r="8" fill="#eef0f5"/><rect x="38" y="12" width="44" height="14" rx="3" fill="#8a93a5"/><circle cx="46" cy="19" r="2.4" fill="${DK}"/><circle cx="74" cy="19" r="2.4" fill="${DK}"/>`
};
const PHOTOS=new Set(["board-cam", "board-esp", "board-xiao", "cap", "castor", "cell", "chassis", "chassis2", "drone", "gun", "ic", "jumper", "kit-car", "kit-starter", "led", "lipo", "mat", "mist", "module-gas", "module-ir", "module-ldr", "module-level", "module-pir", "module-soil", "motor", "oled", "prop", "pump", "res", "shield", "solar", "speaker", "spool", "ultra", "usbc", "volt", "wheel", "wire", "wood-ball", "wood-car", "wood-coin", "wood-jcb", "wood-rack", "wood-sat", "wood-slope", "wood-star", "wood-treb", "wood-uv"]);
const art=spec=>{const f=spec.replace(':','-');if(PHOTOS.has(f))return `<img class="ph" src="p/${f}.webp" alt="" loading="lazy" decoding="async">`;const [k,v]=spec.split(':');return `<svg viewBox="0 0 120 90" role="img" aria-hidden="true">${ART[k](v)}</svg>`};

/* ---------- CATALOG ---------- */
const P=[
 ['0.01µF (10nF) Ceramic Capacitor','Components',2,null,'cap','A 10nF ceramic disc capacitor for filtering, timing and decoupling in circuits and DIY projects.'],
 ['0.1µF (104) Ceramic Capacitor','Components',2,null,'cap','A 100nF ceramic capacitor marked 104, the usual decoupling part beside Arduino and ICs.'],
 ['0.28 Inch DC Voltmeter Display','Display & Audio',69,null,'volt','A three-wire digital LED voltage meter for panel mounting, reading up to 100V DC.'],
 ['0.36 Inch Two-Wire DC Voltmeter, 4.5V to 30V','Display & Audio',59,null,'volt','A two-wire LED voltmeter that powers itself from the line it measures. Good for battery packs.'],
 ['HC-SR04 Ultrasonic Sensor','Sensors',79,89,'ultra','Distance sensor for robots and level gauges. Trigger and echo pins, 5V supply.'],
 ['IR Sensor Module','Sensors',31,35,'module:ir','Infrared obstacle sensor with an adjustable threshold and digital output.'],
 ['Soil Moisture Sensor','Sensors',54,null,'module:soil','Two-prong probe that reads soil moisture for plant watering projects.'],
 ['LM393 LDR Sensor Module','Sensors',35,null,'module:ldr','Light-dependent resistor on an LM393 comparator board, with digital and analog output.'],
 ['Water Level Sensor','Sensors',25,29,'module:level','Exposed-trace sensor that reads how deep it sits in water.'],
 ['PIR Motion Sensor','Sensors',79,null,'module:pir','Passive infrared sensor that flags movement for alarms and automatic lights.'],
 ['MQ-2 Smoke Sensor','Sensors',129,149,'module:gas','Detects smoke, LPG and other combustible gas. Needs a short warm-up before reading.'],
 ['Mini Water Pump Motor, 3V to 12V','Motors & Wheels',55,65,'pump','Small submersible pump for irrigation and fountain builds.'],
 ['Manual Soldering Gun, 60W 220V','Tools',909,1550,'gun','A 60W manual soldering gun for 220V supplies that heats and melts solder.'],
 ['Small Soldering and Repair Mat, Blue','Tools',279,355,'mat','A blue work mat with an open area and compartments for screws, components and tools.'],
 ['Large Soldering and Repair Mat, 450 × 300 mm','Tools',699,950,'mat','A large blue mat with a central circuit board area, tool compartments and numbered part slots.'],
 ['63/37 Solder Wire, 25g Spool','Tools',149,169,'spool','A 25g spool of 63/37 solder wire for components and PCB connections.'],
 ['4-Head USB Type-C Mist Maker Kit','Modules',399,499,'mist','Four-head mist maker kit with atomizer discs and a USB Type-C driver board for DIY humidifiers.'],
 ['USB Type-C Mist Maker Kit, Single Disc','Modules',160,489,'mist','Single-disc mist maker with a 5V USB Type-C driver for DIY humidifier projects.'],
 ['7Semi USB Type-C Female Breakout, 6-Pin','Modules',66,79,'usbc','Exposes USB-C power and data pins for prototyping without soldering the connector.'],
 ['12V 20W Solar Panel, Framed','Power',1499,1750,'solar','A framed 12V nominal solar panel rated at 20Wp that converts sunlight into DC power.'],
 ['3.7V 4300mAh 18650 Li-ion Battery','Power',99,135,'cell','A rechargeable 18650 cell labelled 3.7V and 4300mAh. The capacity is not independently verified.'],
 ['VIPOW 18650 3000mAh 3.7V Li-ion Cell','Power',85,null,'cell','A cylindrical 3.7V 18650 Li-ion cell with a stated 3000mAh capacity.'],
 ['MQ-53 Wooden Quadcopter Kit, 56 Pieces','Kits & Drones',2799,3999,'drone','A wooden 3D puzzle quadcopter with motors, control boards and batteries. Assembly required.'],
 ['Twisted Pair Wire, Red and Black','Components',25,null,'wire','Two insulated red and black wires twisted together for colour-coded wiring. Priced per metre.'],
 ['LM339N Quad Voltage Comparator, 14-Pin DIP','Components',21,35,'ic','A quad comparator in a 14-pin DIP for voltage monitoring and threshold detection.'],
 ['LM393N Dual Voltage Comparator, 8-Pin DIP','Components',10,19,'ic','A dual comparator in an 8-pin DIP for voltage detection and threshold switching.'],
 ['Large 4-Wheel Metal Robot Chassis, 25 × 15 cm','Motors & Wheels',399,525,'chassis','Metal chassis with pre-drilled holes and four side sections for mounting motors.'],
 ['Metal Ball Castor Wheel','Motors & Wheels',69,85,'castor','A passive metal ball castor with two mounting holes that supports small robot chassis.'],
 ['BO Motor 110 RPM, Single Shaft','Motors & Wheels',49,65,'motor','A compact geared DC motor at 110 RPM with a plastic gearbox, suited to robot wheels.'],
 ['8 Ohm 0.5W Mini Round Speaker','Display & Audio',55,null,'speaker','A small round 8 ohm, 0.5W speaker with a metal frame and solder terminals.'],
 ['Arduino Sensor Shield V5.0','Dev Boards',159,190,'shield','A shield for Arduino UNO-style boards with labelled G/V/S headers for sensors and servos.'],
 ['ESP32-S3 DevKit M-1 N16R8, Unsoldered','Dev Boards',799,1500,'board:esp','Dual-core ESP32-S3 board with 16MB flash and 8MB PSRAM, Wi-Fi and BLE. Headers not soldered.'],
 ['ESP32-S3 N16R8 Board with Camera','Dev Boards',1299,1555,'board:cam','An ESP32-S3 board bundled with a camera module, 16MB flash and 8MB PSRAM.'],
 ['Seeed XIAO ESP32-C3, Wi-Fi and Bluetooth','Dev Boards',899,1250,'board:xiao','Compact RISC-V board with 2.4GHz Wi-Fi and BLE for IoT and wearables.'],
 ['Seeed XIAO ESP32-S3, Wi-Fi and Bluetooth','Dev Boards',1334,1999,'board:xiao','Compact dual-core ESP32-S3 with Wi-Fi, BLE and USB Type-C for IoT and sensors.'],
 ['Seeed XIAO SAMD21, Cortex-M0+ 48MHz','Dev Boards',999,1250,'board:xiao','Compact ARM Cortex-M0+ board at up to 48MHz, USB Type-C, Arduino IDE support.'],
 ['Electromagnet Tester DIY Science Kit (UV Currency Detection)','Kids DIY Kits',199,449,'wood:uv','A wooden kit for building a device that uses UV light to reveal fluorescent security features in banknotes.'],
 ['Wooden Trebuchet Catapult DIY STEM Kit','Kids DIY Kits',199,449,'wood:treb','A wooden trebuchet kit that teaches counterweight, leverage and projectile motion.'],
 ['Electrical Spinning Slide Ball STEM Toy','Kids DIY Kits',235,null,'wood:ball','A motorised wooden marble run in which gears move steel balls along a track.'],
 ['Star Lamp DIY STEM Science Project Kit','Kids DIY Kits',199,449,'wood:star','A wooden LED lamp kit that projects starry-sky patterns onto walls and ceilings.'],
 ['Solar Powered Sputnik Satellite STEM Kit','Kids DIY Kits',249,520,'wood:sat','A wooden Sputnik-style satellite that rotates on solar power, no batteries needed.'],
 ['Hydraulic JCB DIY STEM Science Project Kit','Kids DIY Kits',249,520,'wood:jcb','A wooden excavator worked by water-filled syringes to show hydraulic force.'],
 ['Double-Track Strange Slope STEM Physics Toy','Kids DIY Kits',199,449,'wood:slope','A wooden kit in which a marble seems to roll uphill, showing gravity and perspective.'],
 ['DIY Rotating Carousel STEM Kit','Kids DIY Kits',199,449,'wood:car','A motor-driven wooden carousel that teaches gears, rotation and basic circuits.'],
 ['Catapult DIY STEM Science Project Kit','Kids DIY Kits',199,449,'wood:treb','A rubber-band catapult kit that shows force, stored energy and launching.'],
 ['DIY Coin Eating Robot STEM Kit','Kids DIY Kits',399,null,'wood:coin','A slot-fit wooden robot whose arms guide a coin into its body.'],
 ['Smart Drying Rack STEM Kit','Kids DIY Kits',933,1199,'wood:rack','A wooden puzzle kit for building a miniature drying rack and learning structural mechanisms.'],
 ['4 Wheel Kit','DIY Robotic Kits',599,699,'chassis','A four-wheel robot chassis with DC geared motors for building mobile robots.'],
 ['Arduino UNO Starter Kit for Beginners','DIY Robotic Kits',999,null,'kit:starter','Arduino UNO SMD board with sensors, a servo, a relay and a breadboard for learning circuits and code.'],
 ['2 Wheel Chassis with Kit','DIY Robotic Kits',299,350,'chassis2','A compact two-motor robot chassis with a caster wheel for learning robotics.'],
 ['Smart Line Following Robot Kit','DIY Robotic Kits',1750,1999,'kit:car','An educational robot that uses IR sensors to follow black or white lines.'],
 ['Obstacle Avoiding Robot Car using Arduino Kit','DIY Robotic Kits',1750,2500,'kit:car','A DIY robot car that uses an ultrasonic sensor and Arduino to detect obstacles and turn away.'],
 ['2 Wheel Mobile Controlled Robot Car Kit','DIY Robotic Kits',1750,2200,'chassis2','A two-wheel robot car with Bluetooth control to assemble, program and drive from a phone.'],
 ['Intermediate ESP32 Starter Kit for IoT and Automation','DIY Robotic Kits',1499,null,'kit:starter','ESP32 Wi-Fi module with sensors, a relay, a servo and a water pump for IoT and automation projects.',1],
 ['Beginner ESP32 Starter Kit for IoT and Electronics','DIY Robotic Kits',999,null,'board:esp','ESP32 module with sensors, a relay, a buzzer and a breadboard for learning basic electronics.',1]
].map((a,i)=>({id:i,name:a[0],cat:a[1],price:a[2],mrp:a[3],kind:a[4],desc:a[5],out:!!a[6]}));
const CATS=['All',...[...new Set(P.map(p=>p.cat))]];
const inr=n=>'₹'+n.toLocaleString('en-IN');
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const slug=s=>s.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');

/* ---------- STATIC FILL ---------- */

$$('[data-art]').forEach(el=>el.innerHTML=art(el.dataset.art));
const facts=['Free shipping in Tamil Nadu on prepaid orders over ₹999','Cash on Delivery across India','Dispatch in 24 to 48 hours','Order before 5 PM for same-day processing','Pan-India shipping','Tracking on WhatsApp'];
$('#marq').innerHTML=[...facts,...facts].map(f=>`<span>${f}</span>`).join('');

/* ---------- HERO ---------- */
/* Exploded view: each part is its own cut-out, placed in a 1500x837 space (b = x, y, w, h).
   o: the point the part scales around. dx/dy/sc: where and how big it sits inside the assembled car,
   so the parts start exactly where they are in the closed car and lift out from there.
   lift: extra spacing when fully open. */
const PARTS=[
 {f:'rc-p0.webp',b:[627.9,32.2,115.6,87.2],o:[685.7,75.8],dx:-96.5,dy:551.5,sc:1,lift:24,st:0.1,lx:763,ly:76,t:'HC-SR04 ultrasonic sensor',cat:'Sensors',tip:'Sensors'},
 {f:'rc-p1.webp',b:[623.5,86.6,235.5,179.3],o:[741.2,176.2],dx:-8.7,dy:377.1,sc:1,lift:16,st:0.13,lx:872,ly:218,t:'Sensor shield + jumper wires',cat:'Modules',tip:'Modules'},
 {f:'rc-p2.webp',b:[624.1,256.7,235.5,113.3],o:[741.9,313.3],dx:-8.7,dy:301.3,sc:1,lift:9,st:0.16,lx:872,ly:316,t:'Arduino UNO',cat:'Dev Boards',tip:'Dev boards'},
 {f:'rc-p3.webp',b:[516.2,331.9,458.4,210.3],o:[745.4,437.0],dx:-3.3,dy:176.6,sc:1,lift:4,st:0.19,lx:987,ly:427,t:'Acrylic deck + battery box',cat:'DIY Robotic Kits',tip:'Robot kits'},
 {f:'rc-p4.webp',b:[472.6,510.6,556.0,300.3],o:[750.6,660.8],dx:0.0,dy:0.0,sc:1,lift:0,st:0,lx:1047,ly:654,t:'4WD chassis, gear motors, wheels',cat:'Motors & Wheels',tip:'Motors and wheels'}
];
const IW=1500,IH=837;
const stage=$('#stage'),rig=$('#rig'),outer=$('#outer');
$('#parts').innerHTML=PARTS.map((q,i)=>`<img class="part" data-i="${i}" src="${q.f}" alt="" draggable="false" decoding="async" style="left:${q.b[0]/IW*100}%;top:${q.b[1]/IH*100}%;width:${q.b[2]/IW*100}%;height:${q.b[3]/IH*100}%;transform-origin:${(q.o[0]-q.b[0])/q.b[2]*100}% ${(q.o[1]-q.b[1])/q.b[3]*100}%;z-index:${10-i}">`).reverse().join('');
$('#callouts').innerHTML=PARTS.map((q,i)=>`<div class="co" data-i="${i}" style="left:${q.lx/IW*100}%;top:${(q.ly-q.lift)/IH*100}%"><i></i><button data-cat="${q.cat}" aria-label="Shop ${q.tip}"><b>${i+1}</b><span>${q.t}</span><small>SHOP →</small></button></div>`).join('');
const partEls=PARTS.map((q,i)=>$(`.part[data-i="${i}"]`)),coEls=$$('.co');
$('#callouts').addEventListener('click',e=>{const b=e.target.closest('[data-cat]');if(!b)return;const c=b.dataset.cat;location.hash=c==='DIY Robotic Kits'?'diy-robotic-kit':'cat-'+slug(c)});
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const clamp=v=>v<0?0:v>1?1:v;
const ease=t=>{t=clamp(t);return t*t*(3-2*t)};
const out=t=>{t=clamp(t);return 1-Math.pow(1-t,3)};
const curve=f=>f<.06?0:f<.4?ease((f-.06)/.34):f<.56?1:f<.9?1-ease((f-.56)/.34):0;
let p=0,ov=null,dragging=false,rx=0,trx=0,dragX=0,tdx=0,t0=performance.now();
const track=$('#track');
function scrollF(){const r=track.getBoundingClientRect();const h=track.offsetHeight-innerHeight;return clamp(-r.top/h)}
function frame(now){
  if(!document.body.classList.contains('is-home')){requestAnimationFrame(frame);return}
  const t=(now-t0)/1000;
  const target=reduce?1:(ov!==null?ov:curve(scrollF()));
  p+=(target-p)*(reduce?1:.16);
  if(!dragging){trx=Math.sin(t*.8)*2;tdx*=.9}
  rx+=(trx-rx)*.12;dragX+=(tdx-dragX)*.15;
  stage.style.setProperty('--p',p.toFixed(4));
  stage.style.setProperty('--rx',rx.toFixed(2));
  const W=rig.offsetWidth,Hs=rig.offsetHeight,k=W/IW;
  /* whole rig: sits right of the offer copy when closed, centred when open; whole pixels keep it sharp */
  const tx=innerWidth<=860?0:Math.round(((1-p)*.21-p*.05)*W),ty=Math.round(innerWidth<=860?.22*Hs:(p*.04-.02)*Hs);
  /* closed car shown a little larger; it settles to the stack's scale as it opens */
  const zr=1+.18*(1-ease(clamp(p/.45)));
  rig.style.transform=`translate(${tx}px,${ty}px) scale(${zr.toFixed(4)})`;
  /* the assembled photo hands over to the separate parts, which start where they sit in the car */
  const c=ease(p/.1);
  outer.style.opacity=(1-c).toFixed(3);
  const show=Math.min(1,c*2.2).toFixed(3);
  PARTS.forEach((q,i)=>{
    const s=i===4?1:out((p-q.st)/.6);
    const x=Math.round(q.dx*k*(1-s)),y=Math.round(q.dy*k*(1-s)-q.lift*k*s),z=q.sc+(1-q.sc)*s;
    const el=partEls[i];
    el.style.transform=`translate(${x}px,${y}px)`+(z<.999?` scale(${z.toFixed(4)})`:'');
    el.style.opacity=show;
    coEls[i].classList.toggle('on',p>.8+i*.02);
  });
  const sc=$('#scan');sc.style.opacity=(Math.sin(clamp(p/.6)*Math.PI)*.9).toFixed(3);
  sc.style.transform=`scaleX(${(1+p*2).toFixed(2)})`;
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
(function(){
  if(reduce)return;
  let busy=false;
  const stops=()=>{const t=track.getBoundingClientRect().top+scrollY,H=track.offsetHeight-innerHeight;return [t,t+H*.48,t+H]};
  addEventListener('wheel',e=>{
    if(Math.abs(e.deltaY)<4||e.ctrlKey||!document.body.classList.contains('is-home'))return;
    const [a,b,c]=stops(),y=scrollY,down=e.deltaY>0;
    const inHero=down?(y>=a-2&&y<c-2):(y>a+2&&y<=c+2);
    if(!inHero)return;
    e.preventDefault();
    if(busy)return;
    const to=down?(y<b-2?b:c):(y>b+2?b:a);
    busy=true;ov=null;
    scrollTo({top:to,behavior:'smooth'});
    setTimeout(()=>busy=false,950);
  },{passive:false});
})();
let sx=0;

/* ---------- HELPERS ---------- */
const pct=p=>p.mrp?Math.round((1-p.price/p.mrp)*100):0;
const onSale=p=>!!(p.mrp&&p.mrp>p.price);
const rs=n=>'Rs. '+n.toLocaleString('en-IN',{minimumFractionDigits:2,maximumFractionDigits:2});
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const txt=p=>(p.name+' '+p.cat+' '+p.desc).toLowerCase();
const has=(...w)=>p=>{const t=txt(p);return w.some(x=>t.includes(x))};
const IC_HEART='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>';
const nav=$('#nav');

/* ---------- KIT DETAILS (from the DIY Robotic Kit collection) ---------- */
const DET={
 '4 Wheel Kit':{intro:'A four-wheel robot base for building mobile robots. Four driven wheels give it balance, stability and traction on most floors.',
  features:['Four-wheel base for balance, stability and traction','Can be controlled by Arduino or Raspberry Pi through a motor driver','Room to add sensors such as ultrasonic or IR modules'],
  contents:['2 × Car chassis','4 × Gear motor','4 × Car wheel','4 × Speed encoder','1 × Battery box (battery not included)','Screws and nuts']},
 'Arduino UNO Starter Kit for Beginners':{intro:'Everything a beginner needs to start with Arduino: an UNO SMD board, sensors, a servo, a relay and a breadboard, packed in a storage box.',
  contents:['1 × Arduino UNO SMD board','1 × USB programming cable','1 × Breadboard','30 × Jumper wires (assorted)','20 × LEDs (assorted colours)','30 × Resistors (220Ω, 1KΩ, 10KΩ assorted)','2 × Push buttons, 2-pin','1 × LDR light sensor module','1 × Buzzer, 5V','1 × HC-SR04 ultrasonic sensor','1 × IR obstacle sensor','1 × 1-channel 5V relay module','1 × 9V battery with connector','1 × SG90 servo motor','1000 ml storage box'],
  learn:['Arduino programming basics','Circuit building','Digital input and output','Sensor interfacing','Distance measurement','Light and object detection','Relay and home automation basics','Buzzers and alarms','STEM and robotics fundamentals']},
 '2 Wheel Chassis with Kit':{intro:'A compact two-motor robot chassis with a universal caster wheel for support. A simple, low-cost start in robotics, electronics and programming.',
  features:['Two motor-driven wheels with a caster for support','Designed for learning robotics, electronics and programming'],
  contents:['1 × Car chassis','2 × Gear motor','2 × Car tyre','2 × Speed encoder','2 × Fastener','1 × Universal wheel','1 × Battery box (battery not included)','Screws and nuts']},
 'Smart Line Following Robot Kit':{intro:'An educational robot that follows a black or white line using infrared reflective sensors. The Arduino comes pre-programmed, so it runs as soon as it is assembled.',
  specs:[['Operating voltage','5V to 12V DC'],['Control board','Arduino-based'],['Sensor type','Infrared reflective sensors'],['Motor type','DC gear motors (100 to 300 RPM typical)'],['Chassis','2WD / 4WD platform'],['Control logic','Digital sensor-based decisions']],
  features:['Follows black or white lines using IR sensors','Suited to school projects and STEM learning'],
  contents:['Arduino UNO (pre-programmed)','2 × IR sensors','L298N motor driver','2WD robot chassis kit','Jumper wires','18650 batteries with holder','Power switch']},
 'Obstacle Avoiding Robot Car using Arduino Kit':{intro:'A DIY robot car that measures distance with an ultrasonic sensor and turns away from anything in its path, controlled by an Arduino UNO.',
  specs:[['Operating voltage','7V to 12V (12V battery pack recommended)'],['Control board','Arduino UNO (ATmega328P)'],['Sensor','HC-SR04 ultrasonic'],['Detection range','2 cm to 400 cm'],['Motor driver','L298N dual H-bridge'],['Motor type','DC BO gear motors (100 to 300 RPM typical)'],['Control logic','Obstacle detection with directional response'],['Movement','Forward, backward, left, right, stop'],['Power','Battery powered']],
  features:['Autonomous obstacle detection and avoidance'],
  contents:['Arduino UNO','L298N motor driver module','HC-SR04 ultrasonic sensor','BO motors (2WD)','Robot chassis with wheels','SG90 servo motor','Battery holder (18650 or 9V/12V pack)','Jumper wires','Switch']},
 '2 Wheel Mobile Controlled Robot Car Kit':{intro:'A two-wheel robot car you assemble, program and then drive from your phone over Bluetooth.',
  features:['Bluetooth-controlled mobile robot','Suited to learning robotics and embedded systems'],
  contents:['1 set × 2 Wheel kit','1 × Arduino UNO SMD board','1 × HC-05 Bluetooth module','1 × L298N motor driver module','2 × 18650 Li-ion battery','1 × 2-cell battery holder','1 set × Jumper wire combo pack']},
 'Intermediate ESP32 Starter Kit for IoT and Automation':{intro:'An ESP32 Wi-Fi kit for IoT, automation, sensor projects and robotics, with RFID, PIR, a relay, a servo and a mini water pump.',
  contents:['1 × ESP32 WROOM Wi-Fi module','1 × ESP cable','30 × Jumper combo','1 × IR sensor','1 × LDR sensor','1 × 2-channel 5V relay','1 × Buzzer, 5V','30 × Resistor pack (220Ω, 1K, 330Ω)','15 × Assorted LED pack','1 × DHT11 sensor','1 × Tactile push button with cap','1 × MB102 breadboard','1 × SG90 servo motor','1 × Soil moisture sensor','1 × Mini water pump','1 × Water tube','1 × PIR sensor','1 × RFID module','1 × Ultrasonic sensor','1 × Storage box'],
  learn:['Sensor interfacing','IoT control and automation','Motor control','Object and motion detection','RFID-based projects','Water pump control','Beginner-to-intermediate ESP32 projects']},
 'Beginner ESP32 Starter Kit for IoT and Electronics':{intro:'An ESP32 kit for IoT and electronics learning, DIY projects and school or college project practice.',
  contents:['1 × ESP32 WROOM Wi-Fi module','1 × ESP cable','30 × Jumper combo','1 × IR sensor','1 × LDR sensor','1 × 1-channel 5V relay','1 × Buzzer, 5V','30 × Resistor pack (220Ω, 1K, 330Ω)','15 × Assorted LED pack','1 × DHT11 sensor','1 × Ultrasonic sensor','1 × Tactile push button with cap','1 × Medium breadboard','1 × 1000 ml box'],
  learn:['Basic electronics and circuit building','Input, output and sensing','Simple switching and automation','Basic IoT concepts','School and college mini projects']}
};

/* ---------- COLLECTIONS ---------- */
const COL={};
const addCol=(key,title,test,extra={})=>{if(!COL[key])COL[key]={key,title,test,...extra}};
addCol('shop','Products',()=>true);
addCol('kids-diy-kits','Kids DIY Kits',p=>p.cat==='Kids DIY Kits');
addCol('diy-robotic-kit','DIY Robotic Kit',p=>p.cat==='DIY Robotic Kits');
[...new Set(P.map(p=>p.cat))].forEach(c=>addCol('cat-'+slug(c),c,p=>p.cat===c));
const COLLS=[
 {title:'STEM KIT',            art:['wood:treb','wood:sat','wood:jcb','wood:car'], test:p=>p.cat==='Kids DIY Kits'},
 {title:'Motor',               art:['motor','pump','motor','pump'],                test:has('motor','pump')},
 {title:'WHEELS',              art:['wheel','castor','wheel','chassis'],           test:has('wheel','castor','chassis')},
 {title:'Soldering Components',art:['gun','spool','mat','spool'],                  test:p=>p.cat==='Tools'},
 {title:'Sensor',              art:['module:ir','ultra','module:pir','module:gas'], test:p=>p.cat==='Sensors'},
 {title:'RESISTOR, CAPACITOR, LED',art:['res','cap','ic','led'],                   test:p=>p.cat==='Components'},
 {title:'ESP MODULES',         art:['board:esp','board:cam','board:xiao','board:esp'], test:has('esp32')},
 {title:'ARDUINO',             art:['shield','ic','shield','board:xiao'],          test:has('arduino','samd21')},
 {title:'BATTERIES',           art:['cell','lipo','cell','solar'],                 test:p=>p.cat==='Power'},
 {title:'Display',             art:['oled','volt','speaker','volt'],               test:p=>p.cat==='Display & Audio'},
 {title:'WIRES AND CONNECTORS',art:['wire','jumper','usbc','wire'],                test:has('wire','usb type-c female','connector')},
 {title:'DRONE',               art:['drone','prop','motor','drone'],               test:p=>p.cat==='Kits & Drones'||has('drone','quadcopter')(p)}
];
COLLS.forEach(c=>{c.key='c-'+slug(c.title);addCol(c.key,c.title,c.test)});

/* All Categories menu, as on majestronicz.in */
const MEGA=[
 ['Module',['Relay Module','LASER MODULE','BLUETOOTH','POWER MODULE','AMPLIFIER BOARD','RTC','HEAT SHRINK','PELTIER MODULE','POTENTIONMETER','TRIMPOT','KEY PAD','TTL CONVERTOR'],['module']],
 ['Power Supply',['Recharable Battery','Non Recharable Battery','Battery Protection Board','Adapter','Solar Panel','Holder','Cable','Power Connector','Transformer','Charger'],['battery','solar','li-ion','18650']],
 ['Display',['TFT Display','MATRIX DISPLAY','Segment Display'],['display','voltmeter']],
 ['IOT / Wireless Module',['raspberry'],['esp32','wi-fi','bluetooth','xiao']],
 ['Basic Components',['Resistor','Ceramic capacitor','Disc Capacitor','Dot Boards','IC','TACTILE PUSH BUTTON','Switches','LED','LED Strip','FUSE','BREAD BOARD','Multimeter','TRANSISTOR','MOSFET','OSCILLATOR','NTC','RECTIFIER','ON-OFF SWITCHES','PUSH BUTTON','DIODE','MICROCONTROLLER CHIP'],['capacitor','comparator','resistor']],
 ['Motor',['Bo Motor','Johnson Gear Motor','Gear Motor','DC Motor','Stepper Motor','Servo Motor','N20 Motor','Regulator','Driver','Robotic Arm'],['motor']],
 ['Soldering Components',['Soldering Tools','Soldering Iron'],['solder']],
 ['Sensor',['Proximity sensor','EMG AND ECG AMS HEART RATE','LOAD CELL','Heat Shrink','infrared (IR) sensor','Sound Sensor','Level Sensor','RFID','Current Sensor','Ultrasonic Sensor','STM 32','HUMIDIFER','PH SENSOR','SOIL SENSOR','VIBRATION','GAS SENSOR','BMP','TEMPERATURE SENSOR','WATER SENSOR','LDR Sensor Module'],['sensor']],
 ['Tools & Accessories',['Basic Tools','Multicore Wire','Car','Glue Gun','SIngle core Wire'],['mat','solder wire','twisted pair']],
 ['Wheel',['Robotic Wheels','MECANUM WHEEL','BO Wheel'],['wheel','castor']],
 ['DIY kit',['DRONE','DRONE PROPELLER','Robotics','ROBOTIC ARM','STEM KIT'],['kit']],
 ['Connector',['RMC CONNECTOR','JUMPER WIRES','wires','POWER CONNECTOR','TERMINAL CONNECTOR','BERG STRIP'],['connector','jumper','breakout']],
 ['Audio',['BUZZER','SPEAKER','VOICE'],['speaker','buzzer']],
 ['Convertor',['BOOST','BUCK'],['boost','buck']],
 ['Development Board',['ARDUINO uno','ARDUINO NANO'],['arduino','esp32','xiao','devkit']],
 ['Drone',['Drone Motor','DRONE KIT','DRONE PROPELLER','Drone battery'],['drone','quadcopter']]
];
const OVR={'relay module':['relay'],'bluetooth':['bluetooth','hc-05'],'power module':['usb type-c female','mist maker'],'recharable battery':['18650','li-ion','rechargeable'],'solar panel':['solar'],'holder':['battery holder','battery box'],
 'raspberry':['raspberry'],'resistor':['resistor'],'ceramic capacitor':['ceramic capacitor'],'disc capacitor':['ceramic disc','capacitor'],'ic':['comparator','dip'],'led':['led '],'bread board':['breadboard'],
 'bo motor':['bo motor'],'gear motor':['gear motor','geared'],'dc motor':['dc motor','geared dc','gear motor','bo motor'],'servo motor':['servo'],'driver':['l298n','motor driver'],'robotic arm':['robotic arm'],
 'soldering tools':['solder','repair mat'],'soldering iron':['soldering gun','soldering iron'],'proximity sensor':['proximity','pir','obstacle'],'infrared (ir) sensor':['ir sensor','infrared'],'level sensor':['level sensor'],
 'rfid':['rfid'],'ultrasonic sensor':['ultrasonic'],'soil sensor':['soil'],'gas sensor':['gas','smoke'],'water sensor':['water level'],'ldr sensor module':['ldr'],'humidifer':['mist maker','humidifier'],'temperature sensor':['dht11','temperature'],
 'basic tools':['repair mat','soldering'],'multicore wire':['twisted pair'],'car':['robot car','chassis'],'robotic wheels':['wheel','chassis'],'bo wheel':['wheel'],
 'drone':['drone','quadcopter'],'drone propeller':['propeller'],'robotics':['robot'],'stem kit':['stem'],'jumper wires':['jumper'],'wires':['wire'],'power connector':['usb type-c female'],
 'buzzer':['buzzer'],'speaker':['speaker'],'arduino uno':['arduino uno','uno'],'arduino nano':['nano'],'drone motor':['quadcopter'],'drone kit':['quadcopter','drone'],'segment display':['voltmeter','segment'],'matrix display':['matrix'],'tft display':['tft']};
MEGA.forEach(([g,items,gk])=>{
  const tests=items.map(n=>{const k=n.toLowerCase();const t=has(...(OVR[k]||[k]));addCol('m-'+slug(n),n,t,{group:g});return t});
  addCol('g-'+slug(g),g,p=>has(...gk)(p)||tests.some(t=>t(p)),{group:g});
});

/* ---------- STATE ---------- */
let wish=new Set();try{wish=new Set(JSON.parse(localStorage.getItem('mz-wish')||'[]').filter(i=>P[i]))}catch(e){}
const saveWish=()=>{try{localStorage.setItem('mz-wish',JSON.stringify([...wish]))}catch(e){}};
const F={key:'shop',q:'',sort:'feat',inS:false,outS:false,from:'',to:'',page:1};
const PER=16;
const FEAT_NAMES=['HC-SR04 Ultrasonic Sensor','IR Sensor Module','Mini Water Pump Motor, 3V to 12V','Soil Moisture Sensor','LM393 LDR Sensor Module','Water Level Sensor','PIR Motion Sensor','MQ-2 Smoke Sensor'];
const FEAT=FEAT_NAMES.map(n=>P.find(p=>p.name===n)).filter(Boolean);
const bestRank=p=>{const i=FEAT_NAMES.indexOf(p.name);return i<0?100+p.id:i};

/* ---------- CARDS ---------- */
function card(p,i=0){
  const w=wish.has(p.id),sale=onSale(p),off=sale?Math.round((1-p.price/p.mrp)*100):0;
  return `<article class="card2 pc" style="animation-delay:${Math.min(i,12)*30}ms">
  <div class="pc-media"><a class="c2img" href="#product-${p.id}" aria-label="${esc(p.name)}">${art(p.kind)}</a>
  ${p.out?'<span class="pc-badge out">Sold out</span>':sale?`<span class="pc-badge">−${off}%</span>`:''}
  <button class="heart" data-wish="${p.id}" aria-pressed="${w}" aria-label="${w?'Remove from':'Add to'} wishlist">${IC_HEART}</button></div>
  <div class="pc-body">
  <p class="pc-cat">${esc(p.cat)}</p>
  <h3><a href="#product-${p.id}">${esc(p.name)}</a></h3>
  <div class="c2price">${sale?`<span class="now">${rs(p.price)}</span><s>${rs(p.mrp)}</s>`:`<span class="now reg">${rs(p.price)}</span>`}</div>
  <div class="pc-buy"><div class="qty2"><button type="button" data-step="-1" aria-label="Decrease quantity">−</button><input type="number" min="1" max="99" value="1" aria-label="Quantity for ${esc(p.name)}"><button type="button" data-step="1" aria-label="Increase quantity">+</button></div>
  <button class="addbtn" data-add="${p.id}" ${p.out?'disabled':''}>${p.out?'Sold out':'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M5 8h14l-1 12H6z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>Add'}</button></div>
  </div></article>`;
}

/* ---------- HOME ---------- */
{const tc=t=>t.toLowerCase().replace(/(^|[\s,])(\w)/g,(m,a,b)=>a+b.toUpperCase()).replace(/\bLed\b/,'LED').replace(/\bEsp\b/,'ESP').replace(/And/,'&').replace(/^Stem Kit$/,'STEM Kits');
 $('#catsGrid').classList.add('bento');
 $('#catsGrid').innerHTML=COLLS.slice(0,9).map((c,i)=>{const n=P.filter(c.test).length;return `<a class="cat2${i===0?' big':''}" href="#${c.key}">
  <span class="c2n">${String(i+1).padStart(2,'0')}</span>
  <span class="c2pics"><span class="p1">${art(c.art[0])}</span><span class="p2">${art(c.art[1])}</span></span>
  <span class="c2txt"><b>${tc(c.title)}</b><small>${n} product${n===1?'':'s'}</small></span>
  <span class="c2go" aria-hidden="true">→</span></a>`}).join('');}
$('#fgrid').innerHTML=FEAT.map(card).join('');

/* ---------- TOAST ---------- */
let toastT;
function toast(msg,label,fn){
  const t=$('#toast');t.innerHTML=`<span>${msg}</span>${label?`<button>${label}</button>`:''}`;
  if(label)t.querySelector('button').onclick=()=>{t.classList.remove('on');fn()};
  t.classList.add('on');clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove('on'),3200);
}

/* ---------- GLOBAL CLICKS: qty, wishlist, add ---------- */
function toggleWish(id){
  wish.has(id)?wish.delete(id):wish.add(id);saveWish();
  const on=wish.has(id);
  $$(`[data-wish="${id}"]`).forEach(b=>{b.setAttribute('aria-pressed',on);b.setAttribute('aria-label',(on?'Remove from':'Add to')+' wishlist');b.classList.remove('pop');void b.offsetWidth;b.classList.add('pop')});
  if(R.page==='product'&&R.id===id)drawWishBtn();
  drawWishCount();
  if(R.page==='wishlist')drawWish();
  toast(on?'Saved to wishlist':'Removed from wishlist',on?'View':'',()=>location.hash='wishlist');
}
function drawWishCount(){$('#wishCount').textContent=wish.size;$('#wishCount').style.visibility=wish.size?'visible':'hidden'}
document.addEventListener('click',e=>{
  const st=e.target.closest('[data-step]');
  if(st){const inp=st.parentElement.querySelector('input');inp.value=Math.max(1,Math.min(99,(+inp.value||1)+ +st.dataset.step));return}
  const w=e.target.closest('[data-wish]');if(w){e.preventDefault();toggleWish(+w.dataset.wish);return}
  const a=e.target.closest('[data-add]');
  if(a&&!a.disabled){
    const id=+a.dataset.add,c=a.closest('.card2'),q=c?Math.max(1,Math.min(99,+c.querySelector('.qty2 input').value||1)):1;
    add(id,q);if(!a.dataset.html)a.dataset.html=a.innerHTML;a.innerHTML=`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" aria-hidden="true"><path d="m5 12 5 5L20 7"/></svg>Added`;a.classList.add('done');
    clearTimeout(a._t);a._t=setTimeout(()=>{a.innerHTML=a.dataset.html;a.classList.remove('done')},1500);
    toast(`${q} × ${esc(P[id].name)} added`,'View cart',openDrawer);
  }
});

/* ---------- CATALOG ---------- */
const matchQ=(p,q)=>{const t=txt(p);return q.split(/\s+/).filter(Boolean).every(w=>t.includes(w))};
const relScore=(p,q)=>{if(!q)return 0;const n=p.name.toLowerCase();return (n.startsWith(q)?6:0)+(n.includes(q)?4:0)+q.split(/\s+/).filter(w=>n.includes(w)).length};
function baseList(){return F.key==='search'?(F.q?P.filter(p=>matchQ(p,F.q)):P.slice()):P.filter(COL[F.key].test)}
function drawCatalog(){
  const base=baseList();
  const isS=F.key==='search',title=isS?(F.q?`Search results for “${F.q}”`:'Search'):COL[F.key].title;
  $('#catTitle').textContent=title;$('#crumbCat').textContent=isS?'Search':COL[F.key].title;
  document.title=`${isS?'Search':COL[F.key].title} – MAJESTRONICZ`;
  {const SUB={'shop':['The full catalogue','Every component, board, sensor, tool and kit we stock, in one place.'],
   'kids-diy-kits':['Learn by building','Wooden STEM kits for young makers: cut-out parts, simple motors and a finished model to keep.'],
   'diy-robotic-kit':['Build your own robot','Complete robot car kits with chassis, motors, driver, sensors and board in the box.'],
   'search':['Search','Results across the full catalogue.']};
   const d=SUB[F.key]||['Category','Hand-picked '+title.toLowerCase()+' for makers, students and labs.'];
   $('#catKick').textContent=d[0];$('#catSub').textContent=d[1];$('#catN').textContent=base.length+' products';
   const ph=base.filter(p=>PHOTOS.has(p.kind.replace(':','-'))).slice(0,3);
   $('#catArt').innerHTML=ph.map((p,i)=>`<figure class="cha${i}">${art(p.kind)}</figure>`).join('');
   const keys=['shop','kids-diy-kits','diy-robotic-kit',...Object.keys(COL).filter(k=>k.startsWith('cat-')&&!/kids|robotic/.test(k))];
   $('#catChips').innerHTML=keys.map(k=>`<a href="#${k}" class="${k===F.key?'on':''}">${COL[k].key==='shop'?'All':COL[k].title}</a>`).join('');
   {const o=$('#catChips .on'),c=$('#catChips');if(o)c.scrollLeft=o.offsetLeft-c.clientWidth/2+o.offsetWidth/2;}}

  $('#nIn').textContent=base.filter(p=>!p.out).length;$('#nOut').textContent=base.filter(p=>p.out).length;
  const max=base.reduce((m,p)=>Math.max(m,p.price),0);
  $('#maxHint').textContent=base.length?`The highest price is ${rs(max)}`:'';
  $('#avIn').checked=F.inS;$('#avOut').checked=F.outS;$('#pFrom').value=F.from;$('#pTo').value=F.to;$('#sort').value=F.sort;window.__syncSort&&__syncSort();
  let list=base.filter(p=>(F.inS===F.outS||(F.inS&&!p.out)||(F.outS&&p.out))&&(F.from===''||p.price>=+F.from)&&(F.to===''||p.price<=+F.to));
  const q=F.q,by={
    feat:(a,b)=>a.id-b.id,rel:(a,b)=>relScore(b,q)-relScore(a,q)||a.id-b.id,best:(a,b)=>bestRank(a)-bestRank(b),
    az:(a,b)=>a.name.localeCompare(b.name),za:(a,b)=>b.name.localeCompare(a.name),lo:(a,b)=>a.price-b.price||a.id-b.id,hi:(a,b)=>b.price-a.price||a.id-b.id,
    old:(a,b)=>a.id-b.id,new:(a,b)=>b.id-a.id};
  list.sort(by[F.sort]||by.feat);
  const pages=Math.max(1,Math.ceil(list.length/PER));F.page=Math.min(Math.max(1,F.page),pages);
  $('#catCount').textContent=`${list.length} ${list.length===1?'product':'products'}`;
  $('#grid').innerHTML=list.slice((F.page-1)*PER,F.page*PER).map(card).join('');
  const chips=[];
  if(F.inS)chips.push(['inS','In stock']);if(F.outS)chips.push(['outS','Out of stock']);
  if(F.from!==''||F.to!=='')chips.push(['price',`Rs. ${F.from||0} – Rs. ${F.to||max}`]);
  $('#active').innerHTML=chips.map(([k,l])=>`<button data-clear="${k}" aria-label="Remove filter ${l}">${l}</button>`).join('');
  const em=$('#empty');em.hidden=list.length>0;
  if(!list.length){
    em.innerHTML=base.length?`<h3>No products match these filters</h3><p>Try a wider price range or clear the availability filter.</p><button class="addbtn inline" data-clear="all">Clear filters</button>`
      :isS?`<h3>No results for “${esc(F.q)}”</h3><p>Check the spelling or try a shorter word, like “sensor” or “motor”.</p><a class="addbtn inline" href="#shop">Browse all products</a>`
      :`<h3>Nothing listed under ${esc(title)} yet</h3><p>We may still have it in store. Ask on WhatsApp and we will check stock for you.</p><a class="addbtn inline" href="https://wa.me/916379560289?text=${encodeURIComponent('Hi Majestronicz, do you have '+title+' in stock?')}" target="_blank" rel="noopener">Ask on WhatsApp</a>`;
  }
  const nums=[];for(let n=1;n<=pages;n++){if(n===1||n===pages||Math.abs(n-F.page)<=1)nums.push(n);else if(nums[nums.length-1]!=='…')nums.push('…')}
  $('#pager').innerHTML=pages<2?'':`<button class="arrow" data-pg="${F.page-1}" ${F.page===1?'disabled':''} aria-label="Previous page">‹</button>`+nums.map(n=>n==='…'?'<span class="gap">…</span>':`<button data-pg="${n}" ${n===F.page?'aria-current="page"':''}>${n}</button>`).join('')+`<button class="arrow" data-pg="${F.page+1}" ${F.page===pages?'disabled':''} aria-label="Next page">›</button>`;
}
function showCatalog(key){if(F.key!==key){F.page=1;F.inS=F.outS=false;F.from=F.to=''}F.key=key;if(key==='search'&&F.q&&F.sort==='feat')F.sort='rel';drawCatalog()}
$('#pager').addEventListener('click',e=>{const b=e.target.closest('[data-pg]');if(!b||b.disabled)return;F.page=+b.dataset.pg;drawCatalog();scrollTo({top:0,behavior:'smooth'})});
$('#sort').addEventListener('change',e=>{F.sort=e.target.value;F.page=1;drawCatalog()});
$('#avIn').addEventListener('change',e=>{F.inS=e.target.checked;F.page=1;drawCatalog()});
$('#avOut').addEventListener('change',e=>{F.outS=e.target.checked;F.page=1;drawCatalog()});
let pT;['#pFrom','#pTo'].forEach(s=>$(s).addEventListener('input',e=>{clearTimeout(pT);pT=setTimeout(()=>{F[s==='#pFrom'?'from':'to']=e.target.value.replace(/\D/g,'');F.page=1;drawCatalog()},350)}));
const clearF=k=>{if(k==='inS'||k==='all')F.inS=false;if(k==='outS'||k==='all')F.outS=false;if(k==='price'||k==='all')F.from=F.to='';F.page=1;drawCatalog()};
$('#fReset').addEventListener('click',()=>clearF('all'));
$('[data-page="catalog"]').addEventListener('click',e=>{const c=e.target.closest('[data-clear]');if(c)clearF(c.dataset.clear)});
$('.gridtog').addEventListener('click',e=>{const b=e.target.closest('[data-cols]');if(!b)return;$('#grid').dataset.cols=b.dataset.cols;$$('.gridtog button').forEach(x=>x.setAttribute('aria-pressed',x===b))});
$('#fopen').addEventListener('click',()=>{$('#fside').classList.add('open');scrim.classList.add('open')});
$('#fclose').addEventListener('click',()=>closeAll());

/* ---------- PRODUCT PAGE ---------- */
const colOf=p=>p.cat==='Kids DIY Kits'?'kids-diy-kits':p.cat==='DIY Robotic Kits'?'diy-robotic-kit':'cat-'+slug(p.cat);
function drawWishBtn(){const on=wish.has(R.id),b=$('#pdWish');b.setAttribute('aria-pressed',on);b.querySelector('span').textContent=on?'Saved to wishlist':'Add to wishlist'}
function showProduct(id){
  const p=P[id],sale=onSale(p),d=DET[p.name];
  document.title=`${p.name} – MAJESTRONICZ`;
  $('#pdCrumbs').innerHTML=`<a href="#home">Home</a><span>/</span><a href="#${colOf(p)}">${esc(COL[colOf(p)].title)}</a><span>/</span><b>${esc(p.name)}</b>`;
  $('#pdImg').innerHTML=art(p.kind)+(p.out?'<span class="tag" style="background:#2a2740">Sold out</span>':sale?'<span class="tag">Sale</span>':'');
  $('#pdThumbs').innerHTML='';
  $('#pdName').textContent=p.name;
  $('#pdPrice').innerHTML=sale?`<span class="now">${rs(p.price)}</span><s>${rs(p.mrp)}</s><span class="tag">Sale</span><span class="save">You save ${rs(p.mrp-p.price)} (${pct(p)}%)</span>`:`<span class="now reg">${rs(p.price)}</span>`;
  const st=$('#pdStock');st.className='stock'+(p.out?' out':'');st.textContent=p.out?'Sold out. Message us to check when it is back.':'In stock, ready to ship in 24 to 48 hours';
  $('#pdQty input').value=1;
  $('#pdAdd').disabled=p.out;$('#pdAdd').textContent=p.out?'Sold out':'Add to cart';$('#pdBuy').disabled=p.out;
  drawWishBtn();
  const li=a=>`<ul>${a.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`;
  $('#pdDesc').innerHTML=d?[
    `<p>${esc(d.intro)}</p>`,
    d.specs?`<h2>Specifications</h2><table>${d.specs.map(([k,v])=>`<tr><td>${esc(k)}</td><td>${esc(v)}</td></tr>`).join('')}</table>`:'',
    d.features?`<h2>Features</h2>${li(d.features)}`:'',
    `<h2>Package includes</h2>${li(d.contents)}`,
    d.learn?`<h2>What you can learn</h2>${li(d.learn)}`:''
  ].join(''):`<p>${esc(p.desc)}</p><table><tr><td>Category</td><td>${esc(p.cat)}</td></tr><tr><td>Brand</td><td>MAJESTRONICZ</td></tr><tr><td>Availability</td><td>${p.out?'Sold out':'In stock'}</td></tr></table>`;
  $('#pdAcc').innerHTML=[
    ['Shipping',`<p>Prepaid orders are dispatched within 24 to 48 hours, excluding Sundays and public holidays.</p><p>Tamil Nadu: 2 to 3 working days prepaid. Other states: 3 to 5 working days prepaid. Cash on Delivery: 10 to 15 working days.</p><p>Free shipping across Tamil Nadu on prepaid orders of ₹999 or more. <a href="#shipping">Shipping policy</a></p>`],
    ['Returns and refunds',`<p>Report a damaged, defective, incomplete or wrong item within 2 days of delivery, with photos and an unboxing video where possible. <a href="#refund">Refund policy</a></p>`],
    ['Cash on Delivery',`<p>Available across India. Every COD order is confirmed by phone before dispatch.</p>`],
    ['Need help with this product?',`<p>Call or WhatsApp <a href="https://wa.me/916379560289?text=${encodeURIComponent('Hi Majestronicz, I have a question about '+p.name)}" target="_blank" rel="noopener">+91 63795 60289</a>, Monday to Saturday, 10 AM to 8 PM.</p>`]
  ].map(([h,b])=>`<details><summary>${h}</summary><div class="ab">${b}</div></details>`).join('');
  const rel=[...P.filter(x=>x.id!==id&&x.cat===p.cat),...P.filter(x=>x.id!==id&&x.cat!==p.cat&&COLLS.some(c=>c.test(x)&&c.test(p)))];
  $('#related').innerHTML=[...new Map(rel.map(x=>[x.id,x])).values()].slice(0,4).map(card).join('');
}
$('#pdAdd').addEventListener('click',()=>{const p=P[R.id];if(p.out)return;const q=Math.max(1,+$('#pdQty input').value||1);add(p.id,q);toast(`${q} × ${esc(p.name)} added`,'View cart',openDrawer)});
$('#pdBuy').addEventListener('click',()=>{const p=P[R.id];if(p.out)return;add(p.id,Math.max(1,+$('#pdQty input').value||1));$('#checkout').click()});
$('#pdWish').addEventListener('click',()=>toggleWish(R.id));

/* ---------- WISHLIST / ACCOUNT ---------- */
function drawWish(){
  const list=[...wish].map(i=>P[i]).filter(Boolean);
  $('#wlGrid').innerHTML=list.map(card).join('');
  $('#wlEmpty').hidden=list.length>0;
  $('#wlCount').textContent=list.length?`${list.length} saved ${list.length===1?'item':'items'}`:'';
}
function drawAccount(){
  $('#acWish').textContent=`${wish.size} saved ${wish.size===1?'item':'items'}`;
  const n=Object.keys(cart).filter(i=>P[i]).reduce((s,i)=>s+cart[i],0);
  $('#acCart2').textContent=`${n} ${n===1?'item':'items'}`;
}
$('#acCart').addEventListener('click',()=>openDrawer());

/* ---------- CART ---------- */
let cart={};
try{cart=JSON.parse(localStorage.getItem('majestronicz-cart')||'{}')}catch(e){cart={}}
const save=()=>{try{localStorage.setItem('majestronicz-cart',JSON.stringify(cart))}catch(e){}};
const FREE=999;
function add(id,n=1){cart[id]=(cart[id]||0)+n;if(cart[id]<=0)delete cart[id];save();drawCart();if(n>0)bump()}
function bump(){$('#cartCount').animate([{transform:'scale(1)'},{transform:'scale(1.5)'},{transform:'scale(1)'}],{duration:300})}
function drawCart(){
  const ids=Object.keys(cart).filter(i=>P[i]);
  const count=ids.reduce((s,i)=>s+cart[i],0),sub=ids.reduce((s,i)=>s+cart[i]*P[i].price,0);
  $('#cartCount').textContent=count;$('#cartCount').style.visibility=count?'visible':'hidden';$('#subtotal').textContent=inr(sub);
  $('#items').innerHTML=ids.length?ids.map(i=>{const p=P[i];return `<div class="row"><a class="th" href="#product-${i}">${art(p.kind)}</a><div><h4>${esc(p.name)}</h4><div class="qty"><button data-q="${i}:-1" aria-label="Remove one">−</button><span>${cart[i]}</span><button data-q="${i}:1" aria-label="Add one">+</button></div></div><b class="mono">${inr(cart[i]*p.price)}</b></div>`}).join(''):'<p class="notice" style="padding:30px 0">Your cart is empty.</p>';
  const left=Math.max(0,FREE-sub);
  $('#fsBar').style.width=Math.min(100,sub/FREE*100)+'%';
  $('#fsText').textContent=sub===0?'Tamil Nadu prepaid orders of ₹999 or more ship free.':left>0?`Add ${inr(left)} more for free shipping on Tamil Nadu prepaid orders.`:'Free shipping unlocked for Tamil Nadu prepaid orders.';
  $('#checkout').disabled=!ids.length;$('#checkout').style.opacity=ids.length?1:.5;
  if(R.page==='account')drawAccount();
}
$('#items').addEventListener('click',e=>{const b=e.target.closest('[data-q]');if(b){const [i,n]=b.dataset.q.split(':');add(+i,+n);return}if(e.target.closest('a.th'))closeAll()});
const scrim=$('#scrim');
const openDrawer=()=>{closeMega();$('#toast').classList.remove('on');$('#drawer').classList.add('open');scrim.classList.add('open')};
const closeAll=()=>{$('#drawer').classList.remove('open');$('#fside').classList.remove('open');scrim.classList.remove('open');$$('.modal').forEach(m=>{m.classList.remove('open');m.setAttribute('aria-hidden','true')})};
$('#openCart').addEventListener('click',openDrawer);$('#closeCart').addEventListener('click',closeAll);scrim.addEventListener('click',closeAll);
addEventListener('keydown',e=>{if(e.key==='Escape'){closeAll();closeMega();hideSuggest()}});
$('#checkout').addEventListener('click',()=>{
  const ids=Object.keys(cart).filter(i=>P[i]);if(!ids.length)return;
  const sub=ids.reduce((s,i)=>s+cart[i]*P[i].price,0);
  $('#coText').textContent=ids.map(i=>`${cart[i]} × ${P[i].name}  ${inr(cart[i]*P[i].price)}`).join('\n')+`\n\nSubtotal ${inr(sub)} (shipping calculated at checkout)`;
  $('#coMsg').textContent='';closeAll();$('#co').classList.add('open');$('#co').setAttribute('aria-hidden','false');scrim.classList.add('open');
});
$('#coCopy').addEventListener('click',async()=>{try{await navigator.clipboard.writeText($('#coText').textContent);$('#coMsg').textContent='Order copied.'}catch(e){$('#coMsg').textContent='Copy was blocked here. Select the text above and copy it by hand.'}});
$('#closeCo').addEventListener('click',closeAll);

/* ---------- POLICIES ---------- */
const ul=a=>`<ul>${a.map(x=>`<li>${x}</li>`).join('')}</ul>`;
const CONTACT_BLOCK=`<p><b>MAJESTRONICZ</b><br>${BRAND.address}<br>Phone and WhatsApp: <a href="tel:+916379560289">${BRAND.phone}</a><br>Email: <a href="mailto:${BRAND.email}">${BRAND.email}</a><br>Hours: ${BRAND.hours}</p>`;
const POL={
 terms:{label:'Terms of Service',intro:'This website is operated by MAJESTRONICZ. Throughout the site, “we”, “us” and “our” refer to MAJESTRONICZ. By visiting the site or buying from us, you agree to these Terms of Service, including any additional terms and policies referred to here, such as the Refund, Shipping and Privacy policies.',sec:[
  ['General conditions',`<p>We may refuse service to anyone, for any reason, at any time.</p><p>Your content, apart from payment card information, may be transferred unencrypted over networks and adapted to the technical requirements of connected networks or devices. Card information is always encrypted during transfer by the payment gateway.</p><p>You agree not to reproduce, duplicate, copy, sell, resell or exploit any part of the service, use of the service or access to the service without our written permission. Headings in these terms are for convenience only.</p>`],
  ['Technical liability and use of electronic components',`<h3>User competence</h3><p>Our products are electronic components, modules and kits. By buying them you confirm that you, or the person using them, have the basic electronics knowledge needed to handle them safely. We are not responsible for damage caused by improper wiring, short circuits, reverse polarity, exceeding the rated voltage or current, or any other user error.</p><h3>No consequential damages</h3><p>Our liability for any product is limited to the price paid for that product. We are not liable for indirect or consequential loss, including damage to other equipment, loss of data, or injury resulting from the use or misuse of a product.</p><h3>Suitability</h3><p>Components are sold for hobby, educational and prototyping use. They are not certified for medical, life-support, automotive safety or other critical systems unless a product listing says so. It is your responsibility to check that a product suits your application before you use it.</p>`],
  ['Products, pricing and availability',ul(['Prices can change without notice.','We can modify or discontinue any product or service at any time without notice, and are not liable to you or any third party for doing so.','Some products are available online only and may have limited stock. They can be returned or exchanged only under our Refund Policy.','We try to show product colours and images as accurately as possible, but cannot guarantee that your screen shows them exactly. Product images may be illustrations.'])],
  ['Accuracy of billing and account information',`<p>We may refuse or cancel any order. We may limit or cancel quantities bought per person, per household or per order, including orders placed with the same account, payment card, billing address or shipping address.</p><p>We may limit or refuse orders that, in our judgement, appear to be placed by dealers, resellers or distributors without a prior wholesale agreement. If we change or cancel an order we will try to contact you using the email address, phone number or billing address you gave.</p><p>You agree to give current, complete and accurate purchase and account information, and to update it promptly when it changes, so that we can complete your orders and contact you.</p>`],
  ['Third-party links and tools',`<p>Some content, products and services on this site, including payment and delivery services, are provided by third parties. We do not monitor or control these third parties and give no warranty about them. Any use of third-party tools is at your own risk, and their own terms apply. Please review a third party's policies before you transact with them.</p>`],
  ['Governing law',`<p>These Terms of Service and any separate agreements under which we provide services are governed by the laws of India. Any dispute is subject to the exclusive jurisdiction of ${BRAND.jurisdiction}.</p>`],
  ['Changes to these terms',`<p>You can read the latest version of these terms on this page at any time. We may update, change or replace any part of them by posting updates on the website. It is your responsibility to check this page from time to time. Continuing to use the site after changes are posted means you accept them.</p>`],
  ['Contact',CONTACT_BLOCK]
 ]},
 privacy:{label:'Privacy Policy',intro:'This Privacy Policy explains how MAJESTRONICZ collects, uses and shares your personal information when you visit the site, place an order or contact us.',sec:[
  ['Information we collect',`<p>When you place an order or contact us we collect your name, billing and shipping address, email address and phone number.</p><p>Payments are processed by our payment gateway, Razorpay. We do not collect or store your full card number, CVV or UPI PIN.</p><p>When you browse the site we automatically collect device information such as your browser, IP address, time zone and the pages you view.</p>`],
  ['Cookies, analytics and advertising',ul(['<b>Google Analytics</b> helps us understand how visitors use the site so we can improve it.','<b>Meta Pixel</b> lets us measure our advertising, show relevant ads and see what visitors do after clicking an ad on Facebook or Instagram.','You can block or delete cookies in your browser settings. Some parts of the site may not work properly without them.'])],
  ['WhatsApp communications',`<p>By giving us your phone number you agree to receive order confirmations, shipping and tracking updates and occasional offers on WhatsApp through the WhatsApp Business API.</p><p>To stop marketing messages, reply <b>STOP</b> or contact support. You will still receive messages about orders you place.</p>`],
  ['How we use your information',ul(['To fulfil your orders: processing payment, arranging shipping and sending invoices and order confirmations.','To send order, delivery and tracking updates.','To answer your questions and provide customer support.','To screen orders for potential risk or fraud.','To produce GST invoices and keep accounting records required by law.','To send offers and updates you have agreed to receive.'])],
  ['Sharing your information',`<p>We do not sell your personal information.</p>${ul(['Our store runs on Shopify, which stores and processes data for us.','Courier partners receive your name, shipping address and phone number so they can deliver your order.','Our payment gateway processes your payment.','We may share information when the law requires it, to respond to a lawful request, or to protect our rights.'])}`],
  ['Data retention and your rights',`<p>We keep order information for our records unless and until you ask us to delete it, subject to any period we must keep it for tax and accounting purposes.</p><p>If you live in India, you can ask to access the personal information we hold about you, and ask us to correct, update or delete it. Contact us using the details below.</p>`],
  ['Contact',CONTACT_BLOCK]
 ]},
 refund:{label:'Refund Policy',intro:'We want every order to arrive complete and working. This policy explains when you can ask for a return, replacement or refund, and how cancellations are handled.',sec:[
  ['Return requests',`<p>Contact us within <b>2 days of delivery</b> if your order:</p>${ul(['arrived damaged or broken,','is defective or not working,','is missing items, or','is different from what you ordered.'])}<p>Requests for any other reason, such as a change of mind, are accepted only for unused products in their original, undamaged packaging, and only if we approve the return before you send anything back.</p><p>Damage caused by incorrect wiring, short circuits, wrong voltage, soldering or any other misuse is not a manufacturing defect and is not covered.</p><p>This policy does not limit any rights you have under applicable consumer law.</p>`],
  ['Evidence we need',ul(['A clear photo of the outer parcel, with the shipping label visible, before opening it.','A continuous, unedited unboxing video showing the sealed parcel, the label and the contents. If you do not have a video, send your order number with whatever other evidence you have and we will review it.','Photos of the faulty or damaged product.']) + `<p>Send these by email to <a href="mailto:${BRAND.email}">${BRAND.email}</a> or on WhatsApp to ${BRAND.phone}.</p>`],
  ['Cancellation of prepaid orders',`<h3>A. Before dispatch</h3><p>Call or WhatsApp us as soon as possible. You can cancel until the parcel is handed to the courier, even if packing has started. A deduction of 2% of the amount paid covers payment gateway charges, and the remaining 98% is refunded.</p><p>If we cancel a confirmed order for a reason within our control, such as a stock error, you get a full refund plus an extra 2% of the amount paid.</p><h3>B. After dispatch</h3><p>If you cancel or refuse a parcel after it has been dispatched, we refund the amount paid minus the original shipping charge and the actual return-to-origin (RTO) charge, once the parcel is back with us. This applies only to unopened parcels. If you accepted and opened the parcel, use the return process above.</p><h3>C. Re-sending a returned parcel</h3><p>If a parcel comes back to us because of a wrong address or because no one was available, and you want it sent again, you pay the RTO charge plus a new shipping charge. This is a re-shipment, not a refund.</p><div class="callout">When a cancellation or return is caused by us, for example a wrong, damaged or missing item, you are not charged any deduction.</div>`],
  ['Cash on Delivery orders',ul(['COD orders are confirmed by phone before dispatch. Orders we cannot confirm may be cancelled.','If a COD parcel is refused or not collected, any future order must be prepaid, and re-dispatch requires the shipping charge to be paid in advance.'])],
  ['Refund processing',`<p>Returned parcels are inspected when they reach us. Once a refund is approved it is initiated within <b>5 to 6 business days</b>, to the original payment method. Your bank or payment provider may take a few more days to show it.</p><p>If a refund cannot go back to the original method, our support team will arrange a manual refund with you.</p>`],
  ['Contact',CONTACT_BLOCK]
 ]},
 shipping:{label:'Shipping Policy',intro:'We ship across India from Erode, Tamil Nadu. Here is how long orders take, what shipping costs and what to do if something arrives damaged.',sec:[
  ['Order processing',ul(['Prepaid orders are dispatched within <b>24 to 48 hours</b>, excluding Sundays and public holidays.','Orders placed before <b>5:00 PM</b> are usually processed the same day. Orders after 5:00 PM are processed the next working day.','Tracking details are sent on WhatsApp, or by email if there is no WhatsApp number, usually the day after dispatch.'])],
  ['Delivery times and rates',`<table><thead><tr><th>Destination</th><th>Prepaid</th><th>Cash on Delivery</th></tr></thead><tbody><tr><td>Tamil Nadu</td><td>2 to 3 working days</td><td>10 to 15 working days</td></tr><tr><td>Other states</td><td>3 to 5 working days</td><td>10 to 15 working days</td></tr></tbody></table><p style="margin-top:12px">Shipping charges are calculated and shown at checkout. <b>Shipping is free across Tamil Nadu on prepaid orders of ₹999 or more.</b></p><p>Deliveries can be delayed by extreme weather, regional holidays or courier problems outside our control.</p><div class="est2" id="est2"><b>Delivery estimate</b><div class="seg" id="zone" role="group" aria-label="Destination"><button aria-pressed="true" data-v="tn">Tamil Nadu</button><button aria-pressed="false" data-v="oth">Other states</button></div><div class="seg" id="pay" role="group" aria-label="Payment"><button aria-pressed="true" data-v="pre">Prepaid</button><button aria-pressed="false" data-v="cod">Cash on Delivery</button></div><div><big id="eta">2 to 3</big> <span>working days</span></div><small id="etaNote"></small></div>`],
  ['Cash on Delivery',ul(['COD is available across India.','Every COD order is verified by phone before dispatch.','If a COD delivery fails because you were unavailable or refused the parcel, the shipping charge must be paid in advance before a second dispatch.'])],
  ['Local transit options',ul(['<b>Erode:</b> bus parcel forwarding to nearby towns can be arranged.','<b>Coimbatore and Chennai:</b> Rapido pickup from our stores can be arranged.','Contact support after placing your order to set these up.'])],
  ['Damaged or missing items',ul(['If the parcel looks damaged, tampered with or crushed, photograph it before opening.','Record a continuous unboxing video.','Email the photos and video within <b>48 hours of delivery</b> to <a href="mailto:'+BRAND.email+'">'+BRAND.email+'</a>.'])],
  ['Contact',CONTACT_BLOCK]
 ]}
};
const DOCNAV=[['contact','Contact Information'],['privacy','Privacy Policy'],['refund','Refund Policy'],['shipping','Shipping Policy'],['terms','Terms of Service']];
const drawDocnav=(id,cur)=>$(id).innerHTML=DOCNAV.map(([k,l])=>`<a href="#${k}" class="${k===cur?'on':''}">${l}</a>`).join('');
let zone='tn',pay='pre';
function eta(){
  if(!$('#eta'))return;
  $('#eta').textContent=pay==='cod'?'10 to 15':zone==='tn'?'2 to 3':'3 to 5';
  $('#etaNote').textContent=(pay==='cod'?'COD orders are confirmed by phone before dispatch. ':'')+(zone==='tn'&&pay==='pre'?'Free shipping on orders of ₹999 or more.':'Shipping is calculated at checkout.');
}
function showPolicy(k){
  const d=POL[k];document.title=`${d.label} – MAJESTRONICZ`;
  $('#polCrumb').textContent=d.label;drawDocnav('#docnav2',k);
  $('#policy').innerHTML=`<h1>${d.label}</h1><p class="intro">${d.intro}</p><nav class="toc" aria-label="On this page">${d.sec.map(([h],i)=>`<a href="#${k}" data-sec="s${i}">${h}</a>`).join('')}</nav>`+
    d.sec.map(([h,b],i)=>`<section id="s${i}"><h2><i>${String(i+1).padStart(2,'0')}</i>${h}</h2>${b}</section>`).join('');
  if(k==='shipping'){
    [['#zone','zone'],['#pay','pay']].forEach(([sel,key])=>$(sel).addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;$$(sel+' button').forEach(x=>x.setAttribute('aria-pressed',x===b));if(key==='zone')zone=b.dataset.v;else pay=b.dataset.v;eta()}));
    zone='tn';pay='pre';eta();
  }
}
$('#policy').addEventListener('click',e=>{const a=e.target.closest('[data-sec]');if(!a)return;e.preventDefault();$('#'+a.dataset.sec).scrollIntoView({behavior:reduce?'auto':'smooth'})});

/* ---------- CONTACT ---------- */
drawDocnav('#docnav1','contact');
$('#ctgrid').innerHTML=[
  ['hl','Phone and WhatsApp',`<a href="tel:+916379560289">${BRAND.phone}</a>`,'Calls and WhatsApp messages for orders, COD confirmation and delivery status.'],
  ['','Email',`<a href="mailto:${BRAND.email}">${BRAND.email}</a>`,'For damage claims, include photos and the unboxing video.'],
  ['','Business hours','Monday to Saturday','10:00 AM to 8:00 PM. Closed on Sundays.'],
  ['','Erode (head office)','Majestronicz, Erode',BRAND.address],
  ['','Coimbatore store','Town Hall, Coimbatore','2nd Floor, 703/1, Oppanakara St., Town Hall, Coimbatore 641001'],
  ['','Chennai store',`<a href="tel:+916374555100">+91 63745 55100</a>`,'Shop FF-12, First Floor, Anjuman Shopping Arcade, 846 Mount Road, Chennai 600002'],
  ['','Cash on Delivery','Across India','Every COD order is confirmed by phone before dispatch.'],
  ['','Free shipping','Tamil Nadu, prepaid','On prepaid orders of ₹999 or more.']
].map(([c,k,b,p])=>`<div class="ctbox ${c}"><span>${k}</span><b>${b}</b><p>${p}</p></div>`).join('');
$('#waForm').addEventListener('submit',e=>{
  e.preventDefault();
  const m=`Hi Majestronicz, this is ${$('#wfName').value.trim()}.`+($('#wfOrder').value.trim()?` Order: ${$('#wfOrder').value.trim()}.`:'')+`\n${$('#wfMsg').value.trim()}`;
  window.open('https://wa.me/916379560289?text='+encodeURIComponent(m),'_blank','noopener');
});

/* ---------- HEADER: search ---------- */
const hq=$('#hq'),sug=$('#suggest');
const hideSuggest=()=>{sug.hidden=true};
function drawSuggest(){
  const q=hq.value.trim().toLowerCase();
  if(!q){hideSuggest();return}
  const m=P.filter(p=>matchQ(p,q)).sort((a,b)=>relScore(b,q)-relScore(a,q)).slice(0,6);
  sug.innerHTML=(m.length?m.map(p=>`<a href="#product-${p.id}"><span>${art(p.kind)}</span><small>${esc(p.name)}</small><em>${rs(p.price)}</em></a>`).join(''):`<div class="none">No products match “${esc(q)}”.</div>`)+
    `<a class="all" href="#search" data-go-search>View all results for “${esc(q)}” →</a>`;
  sug.hidden=false;
}
hq.addEventListener('input',drawSuggest);
hq.addEventListener('focus',()=>{stopType();drawSuggest()});
hq.addEventListener('blur',()=>{setTimeout(hideSuggest,180);if(!hq.value)startType()});
function runSearch(){nav.classList.remove('srch');F.q=hq.value.trim().toLowerCase();F.page=1;F.sort=F.q?'rel':'feat';hideSuggest();hq.blur();if(location.hash==='#search')showCatalog('search');else location.hash='search'}
$('#searchForm').addEventListener('submit',e=>{e.preventDefault();runSearch()});
sug.addEventListener('click',e=>{if(e.target.closest('[data-go-search]')){e.preventDefault();runSearch()}else hideSuggest()});
$('#searchToggle').addEventListener('click',()=>{const o=nav.classList.toggle('srch');$('#searchToggle').setAttribute('aria-expanded',o);if(o)hq.focus();setNavH()});
document.addEventListener('click',e=>{if(e.target.closest('[data-focus-search]')){setTimeout(()=>{nav.classList.add('srch');setNavH();hq.focus()},60)}});
/* typing placeholder */
const PH='Search "Arduino Uno", "Sensors"...';let tyT=null;
function startType(){
  if(reduce){hq.placeholder=PH;return}
  stopType();let i=0,dir=1;
  const step=()=>{i+=dir;hq.placeholder=PH.slice(0,Math.max(0,i))||' ';
    let d=dir>0?55:22;if(i>=PH.length){dir=-1;d=2200}else if(i<=7&&dir<0){dir=1;d=500}
    tyT=setTimeout(step,d)};
  step();
}
function stopType(){clearTimeout(tyT);hq.placeholder=PH}
startType();

/* ---------- HEADER: All categories mega menu ---------- */
const mega=$('#mega');let mg=0;
$('#mgroups').innerHTML=MEGA.map(([g],i)=>`<button role="listitem" data-g="${i}">${g}</button>`).join('');
const nice=n=>n.split(' ').map(w=>/^\(?[A-Z0-9]{2,4}\)?$/.test(w)&&!/^(AND|KEY|PAD|ARM|FUSE|DRONE|LOAD|CELL|WIRE|BOOST|BUCK|BMP|RATE|SOIL|GAS|VOICE|HEAT)$/.test(w)?w:w==='AND'||w==='and'?'and':w.charAt(0).toUpperCase()+w.slice(1).toLowerCase()).join(' ').replace(/^Bmp$/,'BMP').replace(/^STM 32$/,'STM32').replace(/Arduino uno/i,'Arduino UNO');
const cnt=k=>P.filter(COL[k].test).length;
function drawMg(i){
  mg=i;const [g,items]=MEGA[i];
  $$('#mgroups button').forEach((b,j)=>b.classList.toggle('on',j===i));
  $('#mitems').innerHTML=`<div class="mh"><h3>${g}</h3><a href="#g-${slug(g)}">View all ${g} →</a></div><div class="mlist">${items.map(n=>{const k='m-'+slug(n),c=cnt(k);return `<a href="#${k}">${nice(n)}<i>${c||''}</i></a>`}).join('')}</div>`;
}
function openMega(){mega.hidden=false;$('#allCat').setAttribute('aria-expanded','true');drawMg(mg);setNavH()}
function closeMega(){mega.hidden=true;$('#allCat').setAttribute('aria-expanded','false')}
$('#allCat').addEventListener('click',e=>{e.stopPropagation();mega.hidden?openMega():closeMega()});
$('#mgroups').addEventListener('mouseover',e=>{const b=e.target.closest('[data-g]');if(b&&matchMedia('(hover:hover)').matches)drawMg(+b.dataset.g)});
$('#mgroups').addEventListener('click',e=>{const b=e.target.closest('[data-g]');if(b)drawMg(+b.dataset.g)});
document.addEventListener('click',e=>{if(!mega.hidden&&!e.target.closest('#mega,#allCat'))closeMega();if(!e.target.closest('#searchForm'))hideSuggest()});
$('#menuBtn').addEventListener('click',()=>{$('#utilbar').classList.toggle('open');closeMega();const o=nav.classList.toggle('open');$('#menuBtn').setAttribute('aria-expanded',o)});
function setNavH(){document.documentElement.style.setProperty('--navh',nav.offsetHeight+'px')}
addEventListener('resize',setNavH);
addEventListener('scroll',()=>nav.classList.toggle('solid',scrollY>40),{passive:true});


/* ---------- HOME: curated rail ---------- */
{const tabs=[['Sensors',p=>p.cat==='Sensors'],['Dev boards',p=>p.cat==='Dev Boards'],['Robot kits',p=>p.cat==='DIY Robotic Kits'],['STEM kits',p=>p.cat==='Kids DIY Kits'],['Tools',p=>p.cat==='Tools'||p.cat==='Power']];
 const tb=$('#railTabs'),tr=$('#railTrack');
 tb.innerHTML=tabs.map(([n],i)=>`<button role="tab" aria-selected="${i===0}" data-t="${i}">${n}</button>`).join('');
 const draw=i=>{tr.innerHTML=P.filter(tabs[i][1]).map(card).join('');tr.scrollLeft=0;$$('#railTabs button').forEach((b,j)=>b.setAttribute('aria-selected',j===i))};
 tb.addEventListener('click',e=>{const b=e.target.closest('[data-t]');if(b)draw(+b.dataset.t)});
 $$('.railbtn').forEach(b=>b.addEventListener('click',()=>tr.scrollBy({left:(b.classList.contains('next')?1:-1)*tr.clientWidth*.8,behavior:'smooth'})));
 draw(0);}

/* ---------- 3D: tilt, reveal, coverflow ---------- */
{const RM=matchMedia('(prefers-reduced-motion: reduce)').matches,FINE=matchMedia('(pointer:fine)').matches;
 const TILT='.cat2,.ctile,.sc-card,.st,.trust-grid>div,.p3steps li';
 if(!RM&&FINE){
  let cur=null;
  document.addEventListener('pointermove',e=>{
   const el=e.target.closest&&e.target.closest(TILT);
   if(cur&&cur!==el){cur.style.transform='';cur.classList.remove('t3d');cur=null}
   if(!el||el.closest('.page:not([data-page="home"]):not([data-page="print-3d"])')&&!el.matches('.card2'))return;
   const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
   const k=el.matches('.sc-card')?6:el.matches('.card2,.ctile')?10:8;
   el.classList.add('t3d');el.style.setProperty('--gx',x*100+'%');el.style.setProperty('--gy',y*100+'%');
   el.style.transform=`perspective(900px) rotateX(${(.5-y)*k}deg) rotateY(${(x-.5)*k}deg) translateZ(10px)`;cur=el;
  },{passive:true});
  document.addEventListener('pointerleave',()=>{if(cur){cur.style.transform='';cur.classList.remove('t3d');cur=null}});
 }
 /* scroll reveal */
 const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target)}}),{threshold:.12});
 const mark=()=>$$('[data-page="home"] .trust-grid>div,[data-page="home"] .cat2,.cw,.lux-head,.featured .card2,.eco,.jb,.p3steps li').forEach((el,i)=>{if(!el.dataset.rv){el.dataset.rv=1;el.style.setProperty('--d',(i%4)*90+'ms');if(!RM)el.classList.add('rv');io.observe(el)}});
 mark();new MutationObserver(mark).observe(document.body,{childList:true,subtree:true});
 /* coverflow rail */
 const tr=$('#railTrack');
 const flow=()=>{const c=tr.getBoundingClientRect(),mid=c.left+c.width/2;
  tr.querySelectorAll('.card2').forEach(k=>{const r=k.getBoundingClientRect(),d=Math.max(-1,Math.min(1,(r.left+r.width/2-mid)/(c.width/2)));
   k.style.setProperty('--ry',(-d*14).toFixed(2)+'deg');k.style.setProperty('--tz',(-Math.abs(d)*40).toFixed(1)+'px')})};
 if(tr&&!RM){tr.addEventListener('scroll',()=>requestAnimationFrame(flow),{passive:true});addEventListener('resize',flow);new MutationObserver(()=>requestAnimationFrame(flow)).observe(tr,{childList:true});setTimeout(flow,300)}
 /* eco ring drag */
 const ring=$('#ecoRing');if(ring){let a=0,v=.15,drag=null;
  const tick=()=>{if(!drag)a+=v;ring.style.transform=`rotateX(-8deg) rotateY(${a}deg)`;requestAnimationFrame(tick)};if(!RM)tick();
  ring.parentElement.addEventListener('pointerdown',e=>{drag=e.clientX;ring.parentElement.setPointerCapture(e.pointerId)});
  ring.parentElement.addEventListener('pointermove',e=>{if(drag!==null){a+=(e.clientX-drag)*.4;drag=e.clientX}});
  ring.parentElement.addEventListener('pointerup',()=>drag=null);}
}

/* ---------- HOME: spotlight ---------- */
{const set=i=>{$$('.sp-item').forEach(x=>x.classList.toggle('on',x.dataset.sp==i));$$('.sp-frame img').forEach(x=>x.classList.toggle('on',x.dataset.spi==i))};
 $$('.sp-item').forEach(x=>{x.addEventListener('mouseenter',()=>set(x.dataset.sp));x.addEventListener('focus',()=>set(x.dataset.sp))});}


/* ---------- custom sort dropdown ---------- */
{const sel=$('#sort'),lab=sel.closest('label');
 const wrap=document.createElement('div');wrap.className='sortx';
 wrap.innerHTML=`<button type="button" class="sx-btn" aria-haspopup="listbox" aria-expanded="false"><span class="sx-k">Sort</span><span class="sx-v"></span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m6 9 6 6 6-6"/></svg></button><ul class="sx-list" role="listbox" hidden>${[...sel.options].map(o=>`<li role="option" data-v="${o.value}"><span>${o.text}</span><i>✓</i></li>`).join('')}</ul>`;
 lab.after(wrap);lab.classList.add('sx-hidden');
 const btn=wrap.querySelector('.sx-btn'),list=wrap.querySelector('.sx-list');
 window.__syncSort=()=>{wrap.querySelector('.sx-v').textContent=sel.options[sel.selectedIndex].text;list.querySelectorAll('li').forEach(li=>li.setAttribute('aria-selected',li.dataset.v===sel.value))};
 const close=()=>{list.hidden=true;btn.setAttribute('aria-expanded','false');wrap.classList.remove('open')};
 btn.addEventListener('click',e=>{e.stopPropagation();const o=list.hidden;list.hidden=!o;btn.setAttribute('aria-expanded',o);wrap.classList.toggle('open',o)});
 list.addEventListener('click',e=>{const li=e.target.closest('li');if(!li)return;sel.value=li.dataset.v;sel.dispatchEvent(new Event('change',{bubbles:true}));__syncSort();close()});
 document.addEventListener('click',e=>{if(!wrap.contains(e.target))close()});
 document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
 __syncSort();}

/* ---------- sidebar categories + sort ---------- */
{const sel=$('#sort');
 $('#fsort').innerHTML=[...sel.options].map(o=>`<label class="fs-opt"><input type="radio" name="fsort" value="${o.value}"><span>${o.text}</span></label>`).join('');
 $('#fsort').addEventListener('change',e=>{sel.value=e.target.value;sel.dispatchEvent(new Event('change',{bubbles:true}))});
 const prev=window.__syncSort;
 window.__syncSort=()=>{prev&&prev();const r=$(`#fsort input[value="${sel.value}"]`);if(r)r.checked=true;
  const cur=location.hash.slice(1)||'shop';
  const keys=['shop','kids-diy-kits','diy-robotic-kit',...Object.keys(COL).filter(k=>k.startsWith('cat-')&&!/kids|robotic/.test(k))];
  $('#fcats').innerHTML=keys.map(k=>{const n=P.filter(COL[k].test).length;return `<a href="#${k}" class="${k===cur?'on':''}"><span>${k==='shop'?'All products':COL[k].title}</span><i>${n}</i></a>`}).join('');};
 __syncSort();}
/* ---------- ROUTER ---------- */
const R={page:'home',key:'home',id:null};
function route(){
  const h=decodeURIComponent(location.hash.slice(1))||'home';
  closeMega();closeAll();hideSuggest();nav.classList.remove('open');$('#utilbar').classList.remove('open');
  let page='home',key=h;
  if(COL[h]){page='catalog';showCatalog(h)}
  else if(h==='search'){page='catalog';showCatalog('search')}
  else if(/^product-\d+$/.test(h)&&P[+h.slice(8)]){page='product';R.id=+h.slice(8);showProduct(R.id);key=colOf(P[R.id])}
  else if(h==='wishlist'){page='wishlist';drawWish();document.title='Wishlist – MAJESTRONICZ'}
  else if(h==='account'){page='account';drawAccount();document.title='Account – MAJESTRONICZ'}
  else if(h==='print-3d'){page='print-3d';document.title='3D Print – MAJESTRONICZ'}
  else if(h==='contact'){page='contact';document.title='Contact Information – MAJESTRONICZ'}
  else if(POL[h]){page='policy';showPolicy(h)}
  else{key='home';document.title='MAJESTRONICZ – DIY electronic components, robotics kits and STEM kits'}
  R.page=page;R.key=key;
  $$('.page').forEach(el=>el.hidden=el.dataset.page!==page);
  document.body.classList.toggle('is-home',page==='home');window.__placeNav&&__placeNav(page==='home');(page==='catalog'?$('#searchslot'):$('#utilbar .ub')).append($('#searchForm'));document.body.classList.toggle('is-cat',page==='catalog');
  $$('#nav [data-r]').forEach(a=>{const on=a.dataset.r===key||(a.dataset.r==='shop'&&page==='catalog'&&!['kids-diy-kits','diy-robotic-kit'].includes(key));a.classList.toggle('on',on);on?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current')});
  $$('.hic[href]').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+page));
  scrollTo({top:0,behavior:'instant'});
  setNavH();
}
{const ub=$('#utilbar .ub'),ic=$('.nav .icons'),nw=$('.nav .navwrap'),tr=$('.nav .toprow');ub.append($('#searchForm'));
 window.__placeNav=home=>{if(home){tr.after(nw);ub.append(ic)}else{tr.append(nw);tr.append(ic)}};}
addEventListener('hashchange',route);
drawCart();drawWishCount();route();
})();