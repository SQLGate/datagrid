import * as React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Segment, List } from 'semantic-ui-react';
import pkg from '@root/package.json';
import { SourceCodeEditor } from '@root/dev/components';

export const Usage = (props) => (
  <Container>
    <Segment basic padded>
      <h1>Usage</h1>

      <Header as='h3' dividing>Install</Header>
      <Segment>
        <pre>$ npm install {pkg.name}-es -S</pre>
      </Segment>
      <Segment>
        <pre>$ npm install {pkg.name}-ts -S</pre>
      </Segment>

      <Header as='h3' dividing>ES6 Import</Header>

      <SourceCodeEditor>
        {`
import * as React from 'react';
import { AXDatagrid } from 'datagrid-es'; // 또는 datagrid-ts


export class Datagrid extends React.Component<any, any> {
  constructor( props ) {
    super( props );

    this.state = {
      columns: [
        { key: 'id', width: 60, label: 'ID', align: 'center' },
        { key: 'title', width: 200, label: 'Title', formatter: 'MY_FORMATTER'},
        { key: 'writer', label: 'Writer', align: 'center'},
        { key: 'date', label: 'Date', align: 'center', formatter: 'date'},
        { key: 'money', label: 'Money', align: 'right', formatter: 'money'}
      ],
      data: [
        {id: 1, title: '인생은 해파에게조차 아름답고 장엄하다.', writer: '장기영', date: '20171205123000', money: 1289301823}
      ]
    }
  }

  public render() {
    return (
      <div>
          <AXDatagrid
            height={this.state.height}
            columns={this.state.columns}
            data={this.state.data}
          />
      </div>
    )
  }
}

`}
      </SourceCodeEditor>

    </Segment>
  </Container>
);

export default Usage;