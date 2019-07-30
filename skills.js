const dataset = {
    "name": "Skills",
    "size": 10000,
    "children": [
        {
            "name": "Web",
            "size": 5000,
            "children": [
                {"name": "HTML", "size": 5731},
                {"name": "CSS", "size": 5262},
                {
                    "name": "Javascript",
                    "size": 2500,
                    "children": [
                        {"name": "D3", "size": 2938},
                        {"name": "React", "size": 6714},
                        {"name": "Redux", "size": 3812},
                        {"name": "Node.js", "size": 6714},
                        {"name": "Express", "size": 3743},
                        {"name": "Stripe.js", "size": 621}
                    ]
                },
                {
                    "name": "Python",
                    "size": 2500,
                    "children": [
                        {"name": "Django", "size": 7840}
                    ]
                }
            ]
        },
        {
            "name": "Analytics",
            "size": 5000,
            "children": [
                {
                    "name": "Python",
                    "size": 2500,
                    "children": [
                        {"name": "Tensorflow", "size": 531},
                        {"name": "Pandas", "size": 3814},
                        {"name": "Matplotlib", "size": 3814},
                        {"name": "OpenCSV", "size": 3481}
                    ]
                },
                {
                    "name": "SQL",
                    "size": 2500,
                    "children": [
                        {"name": "SSRS", "size": 5271},
                        {"name": "SSAS", "size": 4882},
                        {"name": "T-SQL", "size": 7091},
                        {"name": "Data Warehouse", "size": 5848}
                    ]
                },
                {"name": "Excel", "size": 6500},
                {"name": "WebFOCUS", "size": 621}
            ]
        },
        {
            "name": "Applications",
            "size": 5000,
            "children": [
                {
                    "name": "Python",
                    "size": 2500,
                    "children": [
                        {"name": "Selenium", "size": 3534},
                        {"name": "BeautifulSoup", "size": 3416},
                        {"name": "Docx", "size": 3814},
                        {"name": "Tweepy", "size": 5914},
                    ]
                },
                {
                    "name": "C#",
                    "children": [
                        {"name": "Unity", "size": 7074}
                    ]
                },
                {"name": "Git", "size": 4068}
            ]
        },
        {
            "name": "Databases",
            "size": 5000,
            "children": [
                {"name": "SSMS", "size": 9072},
                {"name": "T-SQL", "size": 7091},
                {"name": "MySQL", "size": 4812},
                {"name": "Postgresql", "size": 3712},
                {"name": "SQLite", "size": 2649},
                {"name": "NoSQL", "size": 5821},
                {"name": "GraphQL", "size": 5821}
            ]
        },
        {
            "name": "Servers",
            "size": 5000,
            "children": [
                {"name": "Windows", "size": 6500},
                {"name": "Linux", "size": 6500},
                {"name": "Apache", "size": 3426},
                {"name": "Gunicorn", "size": 3426},
                {"name": "CLI", "size": 5982},
                {"name": "Nmap", "size": 5782},
                {"name": "cmd", "size": 5782},
                {"name": "PowerShell", "size": 425}
            ]
        }
    ]
}

const width = 800;
const height = 600;
const colorBlock = getComputedStyle(document.body).getPropertyValue('--color-block');
const colorWhite = getComputedStyle(document.body).getPropertyValue('--color-white');

const svg = d3.select("#skills-graph")
                .append("svg")
                .attr("preserveAspectRatio", "xMinYMin meet")
                .attr("viewBox", "0 0 960 600");

let link = svg.selectAll(".link");
let node = svg.selectAll(".node");

const update = () => {
    let nodes = flatten(dataset);
    let links = d3.layout.tree().links(nodes);

    force.nodes(nodes)
        .links(links)
        .start();

    link = link.data(links, d => d.target.id);
    link.exit().remove();
    link.enter()
        .insert("line", ".node")
        .attr("class", "link");

    node = node.data(nodes, d => d.id);
    node.exit().remove();

    let nodeEnter = node.enter()
                        .append("g")
                        .attr("class", "node")
                        .on("click", click)
                        .call(force.drag);
    nodeEnter.append("circle")
                .attr("r", d => Math.sqrt(d.size) / 10 || 4.5);
    nodeEnter.append("text")
                .attr("dy", ".35vw")
                .style('fill', 'black')
                .text(d => d.name);

    node.select("circle")
        .style("fill", color);
}

const tick = () => {
    link.attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    node.attr("transform", d => "translate(" + d.x + "," + d.y + ")");
}

const color = d => {
    return d._children ? colorBlock
        : d.children ? colorBlock
        : colorWhite;
}

const click = d => {
    if (d3.event.defaultPrevented) return;
    if (d.children) {
        d._children = d.children;
        d.children = null;
    } else {
        d.children = d._children;
        d._children = null;
    }
    update();
}

const flatten = dataset => {
    const nodes = []
    let i = 0;

    const recurse = node => {
        if (node.children) {
            node.children.forEach(recurse);
        }
        if (!node.id) {
            node.id = ++i;
        }
        nodes.push(node);
    }

    recurse(dataset);
    return nodes;
}

const force = d3.layout.force()
                .linkDistance(80)
                .charge(-120)
                .gravity(.05)
                .size([width, height])
                .on("tick", tick);

update();