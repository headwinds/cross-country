import React, { Component } from 'react';
import { Column, RadioGroup, SubHeadline, Headline } from '../../';
import { sleep, copyImgIntoCanvas } from '../../../utils/ColorUtil';
//import { ColorExtractor } from 'react-color-extractor';

//const IMAGE_ONE = "https://i.imgur.com/fBiKbIw.jpg?1";

// need to have an image with crossOrigin="Anonymous"!!!!
// const hyrule = "https://i.imgur.com/QEKUtDu.jpg";
//const IMAGE_URL = hyrule; //"https://www.dreamincode.net/forums/uploads/post-242958-1246321970.jpg";

const elhierroIsandImgUrl = 'https://upload.wikimedia.org/wikipedia/commons/2/25/Santa_Cruz_de_Tenerife_SPOT_1320.jpg';

const IMAGE_URL = elhierroIsandImgUrl;

const SWATCHES_STYLES = {
  marginTop: 20,
  display: 'flex',
  justifyContent: 'center',
};

const initialFormState = {
  isChecked: false,
  optionList: [
    {
      isSelected: false,
      id: 0,
      handleChange: () => {},
      tabIndex: 0,
    },
    {
      isSelected: false,
      id: 1,
      handleChange: () => {},
      tabIndex: 0,
    },
  ],
  selectedOptionId: 0,
};

// https://stackoverflow.com/questions/44556692/javascript-get-average-color-from-a-certain-area-of-an-image/44557266#
class MapMaker extends Component {
  constructor(props) {
    super(props);
    /*
const stage = useRef(null);
  const targetCanvas = useRef(null);
  const destCanvas = useRef(null);
  const [formState, setFormState] = useState(initialFormState);

  const [isLoading, setLoading] = React.useState(true);

  const [colors, setState] = React.useState([]);
  const [isMounted, setMounted] = React.useState(false);
  const [canvasDimensions, setCanvasDimensions] = React.useState({
    width: 0,
    height: 0,
  });
  */
  }

  loadImage() {
    const image = new Image();

    image.onload = function() {
      document.getElementById('aerial').setAttribute('src', this.src);
      const naturalWidth = image.naturalWidth;
      const naturalHeight = image.naturalHeight;
      setCanvasDimensions({ width: naturalWidth, height: naturalHeight });
    };

    image.src = IMAGE_URL;
  }

  renderSwatches() {
    return colors.map((color, id) => {
      return (
        <div
          key={id}
          style={{
            backgroundColor: color,
            width: 100,
            height: 100,
          }}
        />
      );
    });
  }

  getColors(newColors) {
    //this.setState(state => [...colors, ...newColors]);
  }

  /*
 rollup ×
ReferenceError: regeneratorRuntime is not defined
  async squarify() {

    setLoading(true);
    await sleep(1000);
    copyImgIntoCanvas(400, 400, 10);
    setLoading(false);
  }
  */

  /*
  React.useEffect(() => {
    if (stage.current && !isMounted) {
      loadImage();
      setMounted(true);
    }

    if (canvasDimensions.width > 0) {
      squarify();
    }
  }, [isMounted, canvasDimensions]);
  */

  renderTransfer() {
    return (
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex' }}>
          <canvas
            //ref={targetCanvas}
            id="myCanvas"
            style={{
              display: 'block',
              border: '4px solid grey',
            }}
            width={canvasDimensions.width}
            height={canvasDimensions.height}
          />
        </div>
        <div style={{ display: 'flex' }}>
          <canvas
            //ref={destCanvas}
            id="myNewCanvas"
            style={{
              display: 'block',
              border: '4px solid grey',
            }}
            width={canvasDimensions.width}
            height={canvasDimensions.height}
          />
        </div>
      </div>
    );
  }

  handleChange() {
    /*
    const { isChecked } = formState;

    const newFormState = { ...formState, isChecked: !isChecked };
    setFormState(newFormState);
    */
  }

  //const { optionList, selectedOptionId } = formState;
  //       <section ref={stage}>

  render() {
    const isLoading = false;
    return (
      <section>
        <Column>
          <Headline text="Map Maker" />
          <SubHeadline text="Convert an image into a tiled map and extract a colour palette" />

          <Column>
            <p>Do you want to upload an image or do you have an url?</p>
            {/*
            <RadioGroup list={optionList} selectedId={selectedOptionId} handleChange={handleChange} />
            */}
          </Column>
          {isLoading && <h2>Loading</h2>}
          <div style={{ display: isLoading ? 'none' : 'flex' }}>
            {canvasDimensions.width > 0 && this.renderTransfer()}
          </div>
          <div>
            <div style={{ display: 'none' }}>
              {/*
                <ColorExtractor getColors={getColors} maxColors={128}>
                <img id="aerial" src={IMAGE_URL} crossOrigin="Anonymous" alt="Iceland aerial" />
                </ColorExtractor>
                */}
              <img id="aerial" src={IMAGE_URL} crossOrigin="Anonymous" alt="Iceland aerial" />
            </div>
            <div style={{ ...SWATCHES_STYLES, display: isLoading ? 'none' : 'flex' }}>{renderSwatches()}</div>
          </div>
        </Column>
      </section>
    );
  }
}

export default MapMaker;
