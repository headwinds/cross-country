/*
const drawTile = (x,y,z) => {
     
    	  svg.append("g")
        		.attr("transform", "translate (" + x + "," + y + ")")
        		.append("rect")
        		.attr("fill", getRandFill())
        		.attr("stroke", "#DDD")
        		.attr("stroke-width", 1)
        		.attr("width", z)
        		.attr("height", z)
    }
    
    const processRow = (y, z) => {
    	for(x=0;x<tileX;x++) {
        const xPos = x * z;
        const yPos = y * z;
        drawTile(xPos,yPos,z);
    	}
		}

		const processLayer = (z) => {
    	for(y=0;y<tileY;y++) {
        processRow(y,z);
    	}
		}

    
		processLayer(tileSize)
        */