/*


  body {
    font-family: "Helvetica";
    color: #666;
  }
  
.node circle {
  fill: #fff;
  stroke: steelblue;
  stroke-width: 3px;
}

.node text { font: 12px sans-serif; }

.node--internal text {
  text-shadow: 0 1px 0 #fff, 0 -1px 0 #fff, 1px 0 0 #fff, -1px 0 0 #fff;
}

.link {
  fill: none;
  stroke: #ccc;
  stroke-width: 2px;
}

  p {
    margin: 0px;
    padding: 0px;
  }  
  
</style>



<body>
  <h1>Cabin Quest</h1>
  <h2>Tech Tree Prototype</h2>
  <div>Click on each node to reveal the skill for each level</div>
  <br />
  <div id="list"></div> 	
<script src="https://d3js.org/d3.v5.min.js"></script>
<script>
  
// hash map
const skills = [{
  title: "Dodge",
  description: "Increase your ability to dodge attacks",
  cost: 10,
  hit: 0,
  dodge: 5,
  protection: 0,
  damage: 0,
  name: "Level 1: A",
  id: 1,
},{
  title: "Strike",
  description: "Increase your ability to skrike an enemy",
  cost: 20,
  hit: 0,
  dodge: 0,
  protection: 0,
  damage: 5,
  name: "Level 2: A",
  id: 2,
},
{
  title: "Power",
  description: "Increase the power behind your main attack",
  cost: 30,
  hit: 0,
  dodge: 0,
  protection: 0,
  damage: 15,
  name: "Level 3: A",
  id: 3,
},
{
  title: "Accuracy",
  description: "Increase the chance of critical hit",
  cost: 40,
  hit: 0,
  dodge: 0,
  protection: 0,
  damage: 0,
  name: "Level 4: A",
  id: 4,
},
{
  title: "Bash",
  description: "Increase the strength of your attack",
  cost: 40,
  hit: 0,
  dodge: 0,
  protection: 0,
  damage: 10,
  name: "Level 4: B",
  id: 5,
}
]


// the flat data
var flatDataList = [
  {"name": "Level 1: A", "parent": null, "hasChildren": true}, 
  {"name": "Level 2: A", "parent": "Level 1: A", "hasChildren": true },
  {"name": "Level 2: B", "parent": "Level 1: A","hasChildren": false },
  {"name": "Level 3: A", "parent": "Level 2: A","hasChildren": true },
  {"name": "Level 4: A", "parent": "Level 3: A","hasChildren": true },
  {"name": "Level 4: B", "parent": "Level 3: A","hasChildren": true }
];
  
const getSkillName = (name) => {
  return skills.filter(skill => skill.name  === name)[0].title;
}

const getSkill = (name) => {
  return skills.filter(skill => skill.name  === name)[0];
}


const list = document.getElementById("list");
  
const drawSkills = (item) => {
  //list.children.remove();
  list.innerHTML = '';

    const newDiv = document.createElement("div");
  	const newPTitle = document.createElement("h3");
    const newPDescription = document.createElement("p");
    const newPCost = document.createElement("p");
    const newPDamage = document.createElement("p");
  	const newPDodge = document.createElement("p");
  	const newPHit = document.createElement("p");
  	const newPProtection = document.createElement("p");
  
    console.log(item);
    const skill = getSkill(item.data.id);
    
    const newTitle = document.createTextNode(skill.title); 
  	const newDescription = document.createTextNode(skill.description); 
  	const newCost = document.createTextNode("Cost: 💰" + skill.cost);
  	const newDamage = document.createTextNode("Damage: +" + skill.damage); 
  	const newDodge = document.createTextNode("Dodge: +" + skill.dodge); 
  	const newHit = document.createTextNode("Crit: +" + skill.hit); 
  	const newProtection = document.createTextNode("Protection: +" + skill.protection); 
    
     newDiv.appendChild(newPTitle).appendChild(newTitle)
     newDiv.appendChild(newPDescription).appendChild(newDescription)
     newDiv.appendChild(newPCost).appendChild(newCost)
     newDiv.appendChild(newPDamage).appendChild(newDamage)
     newDiv.appendChild(newPDodge).appendChild(newDodge)
     newDiv.appendChild(newPHit).appendChild(newHit)
     newDiv.appendChild(newPProtection).appendChild(newProtection)
    
    list.appendChild(newDiv)
           };
	
  
const flatData = [];
  
  flatDataList.map( data => {
    if (data.hasChildren) flatData.push(data);
  })
  	
const handleNodeClick = d => {

 	// not sure if I need to know if the skill has children or not?!	
  //if (d.children && d.children.length > 0) drawSkills(d)
  drawSkills(d);
}
  
const drawHorizontalTree = (flatData) => {

    // convert the flat data into a hierarchy 
    const treeData = d3.stratify()
      .id(function(d) { return d.name; })
      .parentId(function(d) { return d.parent; })
      (flatData);

    // assign the name to each node
    treeData.each(function(d) {
        d.name = d.id;
      });

    // set the dimensions and margins of the diagram
    const margin = {top: 20, right: 90, bottom: 30, left: 90},
        width = 660 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;

    // declares a tree layout and assigns the size
    const treemap = d3.tree()
        .size([height, width]);

    //  assigns the data to a hierarchy using parent-child relationships
    let nodes = d3.hierarchy(treeData, function(d) {
        return d.children;
      });

    // maps the node data to the tree layout
    nodes = treemap(nodes);

    // append the svg object to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    const svg = d3.select("body").append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom),
        g = svg.append("g")
          .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

    const drawLink = d => {
      if (d.children && d.children.length > 0)
      return "M" + d.y + "," + d.x
             + "C" + (d.y + d.parent.y) / 2 + "," + d.x
             + " " + (d.y + d.parent.y) / 2 + "," + d.parent.x
             + " " + d.parent.y + "," + d.parent.x;
           }


    // adds the links between the nodes
    const link = g.selectAll(".link")
        .data( nodes.descendants().slice(1))
      .enter().append("path")
        .attr("class", "link")
        .attr("d", drawLink);

    const getOnlyChildren = (descendants) => {
      const onlyChildren = [];
      descendants.map( descendant => {
        if (descendant.children) onlyChildren.push(descendant)
       })
      return onlyChildren;
    }  

    // adds each node as a group
    var node = g.selectAll(".node")
        .data(getOnlyChildren ( nodes.descendants() ))
      .enter().append("g")
        .attr("class", function(d) { 
          return "node" + 
            (d.children ? " node--internal" : " node--leaf"); })
        .attr("transform", function(d) { 
          return "translate(" + d.y + "," + d.x + ")"; })
        .on('click', handleNodeClick);

    // adds the circle to the node
    node.append("circle")
      .attr("r", 10);

    // adds the text to the node
    node.append("text")
      .attr("dy", ".35em")
      .attr("x", function(d) { return d.children ? -13 : 13; })
      .style("text-anchor", function(d) { 
        return d.children ? "end" : "start"; })
      .text(function(d) { return getSkillName(d.data.name); });

  }
  
  function drawVerticalTree(flatData) {
  

    let i = 0;

    // convert the flat data into a hierarchy 
    const treeData = d3.stratify()
      .id(function(d) { return d.name; })
      .parentId(function(d) { return d.parent; })
      (flatData);

    // assign the name to each node
    treeData.each(function(d) {
        d.name = d.id;
      });
	
    const margin = {top: 40, right: 90, bottom: 50, left: 90};
		const width = 660 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;
    
    const tree = d3.tree()
      .size([height, width]);

    const diagonal = d => {
      if (d.children && d.children.length > 0)
      return "M" + d.y + "," + d.x
             + "C" + (d.y + d.parent.y) / 2 + "," + d.x
             + " " + (d.y + d.parent.y) / 2 + "," + d.parent.x
             + " " + d.parent.y + "," + d.parent.x;
           }

    // declares a tree layout and assigns the size
    treemap = d3.tree()
        .size([width, height]);

    //  assigns the data to a hierarchy using parent-child relationships
    let nodes = d3.hierarchy(treeData);

    // maps the node data to the tree layout
    nodes = treemap(nodes);

    // append the svg obgect to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    const svg = d3.select("body").append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom),
        g = svg.append("g")
          .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

    // adds the links between the nodes
    const link = g.selectAll(".link")
        .data( nodes.descendants().slice(1))
      .enter().append("path")
        .attr("class", "link")
        .attr("d", function(d) {
           return "M" + d.x + "," + d.y
             + "L" + d.x + "," + (d.y + d.parent.y) / 2
             + " " + d.parent.x + "," +  (d.y + d.parent.y) / 2
             + " " + d.parent.x + "," + d.parent.y;
           });

    // adds each node as a group
    const node = g.selectAll(".node")
        .data(nodes.descendants())
      .enter().append("g")
        .attr("cursor", "pointer")
        .attr("class", function(d) { 
          return "node" + 
            (d.children ? " node--internal" : " node--leaf"); })
        .attr("transform", function(d) { 
          return "translate(" + d.x + "," + d.y + ")"; })
    		.on('click', handleNodeClick);

    // adds the circle to the node
    node.append("circle")
      .attr("r", 10);

    // adds the text to the node
    node.append("text")
      .attr("dy", ".35em")
    	.attr("x", function(d) { return d.children ? -20 : 0; })
      .attr("y", function(d) { return d.children ? -20 : 20; })
      .style("text-anchor", "middle")
      .text(function(d) { return getSkillName(d.data.name); });

  }
  
 drawVerticalTree(flatData);
 
 // bug - branches aren't drawing 
 //drawHorizontalTree(flatData);
 */