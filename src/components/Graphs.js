import Barchart from './Barchart';
import Piechart from './Piechart';
import Card from './Card';

export default function Graphs({ rechartsData }) {

  return (
    <Card>
      <Barchart rechartsData={rechartsData} />
      <Piechart rechartsData={rechartsData} />
    </Card>
  );
}

