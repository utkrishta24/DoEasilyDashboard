import {Button, Form} from 'react-bootstrap';
import { FaPrint, FaDownload } from 'react-icons/fa'

function ExportCard() {
  return (
    <div>
      <div className="export-button">
        <Button variant="secondary"><FaDownload /> Export</Button>
      </div>
      <div className="export-popup">
        <div className="export-popup-child" />
        <div className="excel"><input type='radio'name='type'/>Excel</div>
        <div className="pdf"><input type='radio'name='type'/>PDF</div>
        <div className="detailed"><input type='radio'name='type1'/>Detailed</div>
        <div className="summary"><input type='radio'name='type1'/>Summary</div>

        <div className="rectangle-div" />
        <div className="export-button1">
          <Button variant="secondary"><FaDownload /> Export</Button>
        </div>
        <div className="export-button2">
          <Button variant="secondary"><FaPrint /> Print</Button>
        </div>
      </div>
    </div>
  );
}

export default ExportCard;