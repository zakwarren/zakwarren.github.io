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
    let nodes = flatten(skillsDataset);
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
                .attr("dy", "1rem")
                .style('fill', 'black')
                .style('font-size', '1.6rem')
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

const flatten = skillsDataset => {
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

    recurse(skillsDataset);
    return nodes;
}

const force = d3.layout.force()
                .linkDistance(80)
                .charge(-120)
                .gravity(.05)
                .size([width, height])
                .on("tick", tick);

update();