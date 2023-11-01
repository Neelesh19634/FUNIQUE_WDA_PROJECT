"use client"

const data = {
  nav: {
    heading: "Funique",
    options : ["search","home","profile","setting"]
  },
  hero:{
    navigationPanel: {
      heading: "Funique2",
      links: ["achivements","colaborators"],
      intrests: ["football","chess","webD","sketching"]
    }
  }
}

function Btn({content}){
  return(
    <button className="btn">{content.heading}</button>
  )
}

function NavigationPanel(){
  return(
    <>
    <h1>{data.hero.navigationPanel.heading}</h1>
    <Btn content = {data.hero.navigationPanel}/>
    </>
  );
}

export default function Home() {
  return (
    <>
      <h1>hello</h1>
      <NavigationPanel/>
    </>
  );
}
