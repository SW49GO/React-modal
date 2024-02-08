export const defaultTheme = {
    styleModalContainer : {position: 'fixed',top: '50%' ,left: '50%' ,transform: 'translate(-50%, -50%)',backgroundColor:'#000', color:'#FFF', display:'flex',flexDirection:'column',zIndex:'10'},
    styleOverlay:{position:'absolute',top:'0',left:'0',width:'100%',height:'100%', backgroundColor:'#ededed', opacity:'0.5',zIndex:'10'},
    styleModalTitle:{ color:'#FFF',padding:'0.1rem', fontSize:'0.8rem'},
    styleContainerContent:{padding:'0.6rem 1rem'},
    styleContainerHeader :{display:'flex',justifyContent:'space-between',alignItems:'center', width:'100%'},
    styleButton:{backgroundColor:'transparent',border:'none',color:'#FFF',cursor:'pointer'}
}

export const basicTheme = {
    ...defaultTheme,
    styleModalContainer:{position: 'fixed', top: '50%' ,left: '50%' , transform: 'translate(-50%, -50%)',width:'20rem',borderRadius:10, backgroundColor:"#fff", overflow:'hidden', boxShadow:'10px 5px 5px #a3a3a3', border:'1px solid #000'},
    styleContainerClose:{borderBottom:'1px solid #a3a3a3', backgroundColor:"#fff"},
    styleContainerContent:{fontSize:'25px', padding:'2rem', color:"#000"},
    styleButton:{padding:5,border:'none',background:'#fff', position:'absolute', right:10, top:5},
    styleButtonHover: {backgroundColor: '#a3a3a3', borderRadius:'20', color: '#fff'}
}

export const headerTheme = {
    ...basicTheme,
    styleContainerHeader :{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%', borderBottom:'1px solid #000', color: '#fff', backgroundColor:'transparent'},
    styleModalTitle: {color:'#000',paddingLeft:10},
    styleButton:{backgroundColor:'transparent', border:'none',color:'#000',cursor:'pointer'},
    styleButtonHover: {backgroundColor: '#a3a3a3', color: '#fff'}
}

export const buttonTheme = {
    ...basicTheme,
    styleContainerContent:{padding:'2rem 0 3rem 1rem', marginBottom:'2rem',fontSize:'25px'},
    styleContainerHeader :{display:'flex',justifyContent:'center', backgroundColor:'transparent'},
    styleButton:{position:'absolute',bottom:0,backgroundColor:'transparent', border:'1px solid black',borderRadius:5,boxShadow:'2px 2px 2px #a3a3a3',color:'#000',cursor:'pointer', padding:'5px 10px', margin:'1rem'},
    styleButtonHover: {backgroundColor: '#a3a3a3', color: '#fff'}
}

export const headerAndButtonTheme = {
    ...basicTheme,
    styleContainerHeader :{display:'flex',justifyContent:'center', borderBottom:'1px solid #000', padding:5},
    styleContainerContent:{padding:'2rem 0 3rem 1rem', marginBottom:'2rem',fontSize:'25px'},
    styleModalTitle:{padding:0},
    styleButton:{position:'absolute',bottom:0, backgroundColor:'transparent', border:'1px solid black',borderRadius:5,boxShadow:'2px 2px 2px #a3a3a3',color:'#000',cursor:'pointer', padding:'5px 10px', margin:'1rem'},
    styleButtonHover: {backgroundColor: '#a3a3a3', color: '#fff'}
}