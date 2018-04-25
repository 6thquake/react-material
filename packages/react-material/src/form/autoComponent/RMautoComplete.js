import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { MenuItem } from 'material-ui/Menu';
import Chip from 'material-ui/Chip';
import RMpagination from '../pagination/pagination'


function renderInput(inputProps) {
    const { InputProps, classes, ref, ...other } = inputProps;

    return (
        <TextField
            InputProps={{
                inputRef: ref,
                classes: {
                    root: classes.inputRoot,
                },
                ...InputProps,
            }}
            {...other}
        />
    );
}

function renderSuggestion({ suggestion, index, itemProps, highlightedIndex, selectedItem }) {
    const isHighlighted = highlightedIndex === index;
    const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1;

    return (
        <MenuItem
            {...itemProps}
            key={suggestion.label}
            selected={isHighlighted}
            component="div"
            style={{
                fontWeight: isSelected ? 500 : 400,
            }}
        >
            {suggestion.label}
        </MenuItem>
    );
}
renderSuggestion.propTypes = {
    highlightedIndex: PropTypes.number,
    index: PropTypes.number,
    itemProps: PropTypes.object,
    selectedItem: PropTypes.string,
    suggestion: PropTypes.shape({ label: PropTypes.string }).isRequired,
};

function getSuggestions(suggestions,inputValue) {
    // let count = 0;
    return suggestions.filter(suggestion => {
        // const keep =
        //     (!inputValue || suggestion.label.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) &&
        //     count < 5;
        //
        // if (keep) {
        //     count += 1;
        // }

        return !inputValue || suggestion.label.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1;
    });
}

class DownshiftMultiple extends React.Component {
    state = {
        inputValue: '',
        selectedItem: [],
        currentPage:1
    };


    handleInputChange = event => {
        this.setState({ inputValue: event.target.value,currentPage:1 });
    };

    handleChange = item => {
        let { selectedItem } = this.state;

        if (selectedItem.indexOf(item) === -1) {
            selectedItem = [...selectedItem, item];
        }
        this.props.autoCb(selectedItem);
        console.log(selectedItem);
        this.setState({
            inputValue: '',
            selectedItem,
        });
    };

    handleDelete = item => () => {
        const selectedItem = [...this.state.selectedItem];
        selectedItem.splice(selectedItem.indexOf(item), 1);

        this.setState({ selectedItem });
        this.props.autoCb(selectedItem);
    };
    pageCallbackFn(i){
        this.setState({currentPage:i});
    }

    render() {
        const { classes ,dataSource,pageConfigPa,placeHold} = this.props;
        const { inputValue, selectedItem } = this.state;
        const totalData = getSuggestions(dataSource,this.state.inputValue);
        const total = totalData.length;
        const totalPage = Math.ceil(total/pageConfigPa.pageSize);
        const pageConfig={
            currentPage: this.state.currentPage,
            pageSize: pageConfigPa.pageSize,
            total:total,
            totalPage: totalPage
        };
        let start = (this.state.currentPage - 1) * pageConfig.pageSize;
        let end = this.state.currentPage * pageConfig.pageSize > pageConfig.total ? undefined : this.state.currentPage * pageConfig.pageSize;
        const filteData = totalData.slice(start,end);
        return (
            <Downshift inputValue={inputValue} onChange={this.handleChange} selectedItem={selectedItem}>
                {({
                      getInputProps,
                      getItemProps,
                      isOpen,
                      inputValue: inputValue2,
                      selectedItem: selectedItem2,
                      highlightedIndex,
                  }) => (
                    <div className={classes.container}>
                        {renderInput({
                            fullWidth: true,
                            classes,
                            InputProps: getInputProps({
                                startAdornment: selectedItem.map(item => (
                                    <Chip
                                        key={item}
                                        tabIndex={-1}
                                        label={item}
                                        className={classes.chip}
                                        onDelete={this.handleDelete(item)}
                                    />
                                )),
                                onChange: this.handleInputChange,
                                placeholder: placeHold,
                                id: 'integration-downshift-multiple',
                            }),
                        })}
                        {isOpen ? (
                            <Paper className={classes.paper} square>
                                {filteData.map((suggestion, index) =>
                                    renderSuggestion({
                                        suggestion,
                                        index,
                                        itemProps: getItemProps({ item: suggestion.label }),
                                        highlightedIndex,
                                        selectedItem: selectedItem2,
                                    }),
                                )}
                               <RMpagination
                                   {...pageConfig}
                                   pageCallbackFn ={this.pageCallbackFn.bind(this)}
                               />
                            </Paper>
                        ) : null}
                    </div>
                )}
            </Downshift>
        );
    }
}

DownshiftMultiple.propTypes = {
    classes: PropTypes.object.isRequired,
};
class DownshiftSingle extends React.Component {
    state = {
        inputValue: '',
        currentPage:1,
        selectedItem:''
    };
    handleInputChange = event => {
        this.setState({ inputValue: event.target.value ,currentPage:1});
    };

    pageCallbackFn(i){
        this.setState({currentPage:i});
    }
    handleChange = item => {
        this.props.autoCb(item);
        this.setState({ selectedItem: item });
    };
    render() {
        const { pageConfigPa,classes ,dataSource,placeHold} = this.props;
        const totalData = getSuggestions(dataSource,this.state.inputValue);
        const total = totalData.length;
        const totalPage = Math.ceil(total/pageConfigPa.pageSize);
        const pageConfig={
            currentPage: this.state.currentPage,
            pageSize: pageConfigPa.pageSize,
            total:total,
            totalPage: totalPage
        };
        let start = (this.state.currentPage - 1) * pageConfig.pageSize;
        let end = this.state.currentPage * pageConfig.pageSize > pageConfig.total ? undefined : this.state.currentPage * pageConfig.pageSize;
        const filteData = totalData.slice(start,end);
        return (
            <Downshift onChange={this.handleChange}>
                {({ getInputProps, getItemProps, isOpen, inputValue, selectedItem, highlightedIndex }) => (
                    <div className={classes.container}>
                        {renderInput({
                            fullWidth: true,
                            classes,
                            InputProps: getInputProps({
                                onChange: this.handleInputChange,
                                placeholder: placeHold,
                                id: 'integration-downshift-simple',
                            }),
                        })}
                        {isOpen ? (
                            <Paper className={classes.paper} square>
                                {filteData.map((suggestion, index) =>
                                    renderSuggestion({
                                        suggestion,
                                        index,
                                        itemProps: getItemProps({ item: suggestion.label }),
                                        highlightedIndex,
                                        selectedItem,
                                    }),
                                )}
                                <RMpagination
                                   {...pageConfig}
                                    pageCallbackFn ={this.pageCallbackFn.bind(this)}
                                />
                            </Paper>
                        ) : null}
                    </div>
                )}
            </Downshift>
        );
    }
}
DownshiftSingle.propTypes = {
    classes: PropTypes.object.isRequired,
};
const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 250,
    },
    container: {
        flexGrow: 1,
        position: 'relative',
    },
    paper: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing.unit,
        left: 0,
        right: 0,
    },
    chip: {
        margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
    },
    inputRoot: {
        flexWrap: 'wrap',
    },
});

function IntegrationDownshift(props) {
    /*
    * classes:加的class
    * dataSource:数据源
    * pageConfig:配置分页信息，只需配置pageSize
    * multipleble:是否多选
    * placeHold:placeHold
    * autoCb:传给父组件选取的值
    * */
    const { classes ,dataSource,pageConfig,multipleble,placeHold,autoCb} = props;
    return (
        <div className={classes.root}>
            {multipleble?<DownshiftMultiple
                    classes={classes}
                    dataSource={dataSource}
                    pageConfigPa={pageConfig}
                    placeHold={placeHold}
                    autoCb={autoCb}/>
            :<DownshiftSingle
                    classes={classes}
                    dataSource={dataSource}
                    pageConfigPa={pageConfig}
                    placeHold={placeHold}
                    autoCb={autoCb}/>}
        </div>
    );
}

IntegrationDownshift.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IntegrationDownshift);
