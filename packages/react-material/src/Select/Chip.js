import React, {Component} from 'react';
import Chip from '@material-ui/core/Chip';

export default class RMChip extends Component {


    styles = {
        chip: {
            margin: 4
        },
        wrapper: {
            display: 'flex',
            flexWrap: 'nowrap',

        },
    };

    handleRequestDelete = (key, label) => {
        this.chipData = this.props.chipData;
        const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key);
        this.chipData.splice(chipToDelete, 1);
        this.setState({chipData: this.chipData});

        this.values = this.props.values;
        this.values.splice(chipToDelete, 1);
        this.setState({values: this.values});
        // this.props.handleIconChange({values: this.values});
    };

    renderChip(data) {
        return (<Chip
            key={data.key}
            onRequestDelete={() => {
                this.handleRequestDelete(data.key, data.label)
            }}
            style={this.styles.chip}
        >
            {data.label}
        </Chip>)

    }


    render() {
        return (
            <div style={this.styles.wrapper}>
                {this.props.chipData.map((item) => this.renderChip(item), this)}
            </div>
        );
    }
}
