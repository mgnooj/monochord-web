"use strict";(self.webpackChunkmonochord_web=self.webpackChunkmonochord_web||[]).push([[82],{4558:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=n(4848),r=n(8453);const i={sidebar_position:30},d="Synth",l={id:"tutorial-extras/synth",title:"Synth",description:"Microton FM Interface",source:"@site/docs/tutorial-extras/synth.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/synth",permalink:"/docs/tutorial-extras/synth",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Tuning",permalink:"/docs/tutorial-extras/tuning"},next:{title:"Audio Unit",permalink:"/docs/tutorial-extras/au"}},h={},c=[{value:"Overview: FM Synthesis",id:"overview-fm-synthesis",level:2},{value:"FM Operators",id:"fm-operators",level:2},{value:"Filter",id:"filter",level:2},{value:"Envelope",id:"envelope",level:2},{value:"Keyboard interface",id:"keyboard-interface",level:2},{value:"Presets",id:"presets",level:2},{value:"Mono/Poly switch",id:"monopoly-switch",level:2},{value:"MIDI controls",id:"midi-controls",level:2}];function o(e){const t={h1:"h1",h2:"h2",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"synth",children:"Synth"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Microton FM Interface",src:n(2365).A+"",width:"2880",height:"585"})}),"\n",(0,s.jsx)(t.p,{children:"Dive into the Microton FM's flexible synthesis module."}),"\n",(0,s.jsx)(t.h2,{id:"overview-fm-synthesis",children:"Overview: FM Synthesis"}),"\n",(0,s.jsx)(t.p,{children:"Like most synths, the Microton FM can be broken down into four parts:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Oscillator(s): The component that emits a sound wave."}),"\n",(0,s.jsx)(t.li,{children:"Filter: The component that modifies the sound wave's audible signals."}),"\n",(0,s.jsx)(t.li,{children:"Filter modifier: A component which optionally makes programmatic modifications to the Filter."}),"\n",(0,s.jsx)(t.li,{children:"Amplitude envelope: A component which modifies a signal's amplitude, or volume."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"fm-operators",children:"FM Operators"}),"\n",(0,s.jsx)(t.p,{children:"FM stands for 'frequency modulation'. The basic building block of an FM synth is an 'operator', which consists of at least two oscillators called the 'carrier' and 'modulator'. The modulator oscillator produces a frequency which is then fed into the carrier. The interaction of the two signals produces a new frequency. Simple in conception, FM synthesis allows for an incredibly diverse range of sounds unattainable via analog-style subtractive synthesis."}),"\n",(0,s.jsx)(t.p,{children:"Microton FM features two operators running in parallel. There are two modes for programming these operators: the default, which provides a ratio knob that controls the ratio of the modulating signal frequency to the carrier frequency, and an index knob which controls the amount of modulation on the carrier frequency. The ratio knob's settings are listed in the following table."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Knob"}),(0,s.jsx)(t.th,{children:"Ratio"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"0.0"}),(0,s.jsx)(t.td,{children:"[1.0, 1.0]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1.0"}),(0,s.jsx)(t.td,{children:"[1.0, 4.0 / 3.0]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"2.0"}),(0,s.jsx)(t.td,{children:"[1.0, 1.5]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"3.0"}),(0,s.jsx)(t.td,{children:"[1.0, 2.0]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"4.0"}),(0,s.jsx)(t.td,{children:"[1.0, 2.5]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"5.0"}),(0,s.jsx)(t.td,{children:"[1.0, 3.0]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"6.0"}),(0,s.jsx)(t.td,{children:"[1.0, 3.5]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"7.0"}),(0,s.jsx)(t.td,{children:"[1.0, 4.0]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"8.0"}),(0,s.jsx)(t.td,{children:"[1.0, 5.0]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"9.0"}),(0,s.jsx)(t.td,{children:"[2.0, 3.0]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"10.0"}),(0,s.jsx)(t.td,{children:"[2.0, 4.0]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"11.0"}),(0,s.jsx)(t.td,{children:"[2.0, 5.0]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"12.0"}),(0,s.jsx)(t.td,{children:"[2.0, 7.0]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"13.0"}),(0,s.jsx)(t.td,{children:"[3.0, 4.0]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"14.0"}),(0,s.jsx)(t.td,{children:"[3.0, 5.0]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"15.0"}),(0,s.jsx)(t.td,{children:"[4.0, 5.0]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"16.0"}),(0,s.jsx)(t.td,{children:"[5.0, 6.0]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"17.0"}),(0,s.jsx)(t.td,{children:"[6.0, 9.0]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"18.0"}),(0,s.jsx)(t.td,{children:"[7.0, 8.0]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"19.0"}),(0,s.jsx)(t.td,{children:"[7.0, 9.0]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"20.0"}),(0,s.jsx)(t.td,{children:"[8.0, 11.0]"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"By clicking the button next to the ratio knob, the Microton will display text fields for the carrier and modulator frequencies, which users can edit directly."}),"\n",(0,s.jsx)(t.h2,{id:"filter",children:"Filter"}),"\n",(0,s.jsx)(t.p,{children:"The filter section contains two separate filters: 70's inspired low-pass filter, with cutoff 20 hz - 12000 hz, and a high-pass filter, with a cutoff range of 12000hz to 24000hz."}),"\n",(0,s.jsx)(t.h2,{id:"envelope",children:"Envelope"}),"\n",(0,s.jsx)(t.p,{children:"The Amplitude Envelope allows us to shape the amplification of each note."}),"\n",(0,s.jsx)(t.h2,{id:"keyboard-interface",children:"Keyboard interface"}),"\n",(0,s.jsx)(t.p,{children:'Selecting any of "Micro", "Piano", or "Strip" from the Interface menu will access the virtual Keyboard interface. This is an on-screen MIDI keyboard capable of triggering any of the notes from your current tuning. Each interface responds to the Element Styling of the currently loaded tuning.'}),"\n",(0,s.jsx)(t.p,{children:'The "Micro", or Microtonal, interface is highly customizable in its keyboard layout: see Styling for more information.'}),"\n",(0,s.jsx)(t.h2,{id:"presets",children:"Presets"}),"\n",(0,s.jsx)(t.p,{children:"The Synth module has its own Preset section, distinct from the Tuning presets. Save, delete, and load synth patches all require just a few clicks."}),"\n",(0,s.jsx)(t.p,{children:'Synths can be saved at any time by pressing the "Save" button and entering a name for the patch. Note that saving a synth patch with the same name as an existing patch will result in the existing patch being overwritten.'}),"\n",(0,s.jsx)(t.p,{children:"To delete a synth patch, first load the patch from the patches menu, and then press Delete."}),"\n",(0,s.jsx)(t.h2,{id:"monopoly-switch",children:"Mono/Poly switch"}),"\n",(0,s.jsx)(t.p,{children:"Switch between modes with single voice and six independent voices."}),"\n",(0,s.jsx)(t.h2,{id:"midi-controls",children:"MIDI controls"}),"\n",(0,s.jsx)(t.p,{children:"In standalone mode, Microton FM automatically maps MIDI controls to its parameters. The following table lists the parameter and its respective MIDI CC value."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"MIDI CC"}),(0,s.jsx)(t.th,{children:"Param"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"20"}),(0,s.jsx)(t.td,{children:"Waveform 1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"21"}),(0,s.jsx)(t.td,{children:"Amplitude 1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"22"}),(0,s.jsx)(t.td,{children:"Mod Ratio 1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"23"}),(0,s.jsx)(t.td,{children:"Mod Index 1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"24"}),(0,s.jsx)(t.td,{children:"High Cut 1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"25"}),(0,s.jsx)(t.td,{children:"High Res 1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"26"}),(0,s.jsx)(t.td,{children:"Low Cut 1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"27"}),(0,s.jsx)(t.td,{children:"Low Res 1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"28"}),(0,s.jsx)(t.td,{children:"Attack 1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"29"}),(0,s.jsx)(t.td,{children:"Decay 1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"30"}),(0,s.jsx)(t.td,{children:"Sustain 1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"31"}),(0,s.jsx)(t.td,{children:"Release 1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"32"}),(0,s.jsx)(t.td,{children:"Glide 1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"33"}),(0,s.jsx)(t.td,{children:"Waveform 2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"34"}),(0,s.jsx)(t.td,{children:"Amplitude 2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"35"}),(0,s.jsx)(t.td,{children:"Mod Ratio 2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"36"}),(0,s.jsx)(t.td,{children:"Mod Index 2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"37"}),(0,s.jsx)(t.td,{children:"High Cut 2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"38"}),(0,s.jsx)(t.td,{children:"High Res 2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"39"}),(0,s.jsx)(t.td,{children:"Low Cut 2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"40"}),(0,s.jsx)(t.td,{children:"Low Re2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"41"}),(0,s.jsx)(t.td,{children:"Attack 2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"42"}),(0,s.jsx)(t.td,{children:"Decay 2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"43"}),(0,s.jsx)(t.td,{children:"Sustain 2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"44"}),(0,s.jsx)(t.td,{children:"Release 2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"45"}),(0,s.jsx)(t.td,{children:"Glide 2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"46"}),(0,s.jsx)(t.td,{children:"Polyphony"})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},2365:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/fm_synth_interface-a7bc8fe2f4c64926f33c2969432e21db.png"},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>l});var s=n(6540);const r={},i=s.createContext(r);function d(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);