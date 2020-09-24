import { registerBlockType } from '@wordpress/blocks';
import {InspectorControls, RichText  } from '@wordpress/block-editor';
import { PanelBody, PanelRow, ToggleControl} from '@wordpress/components';


const myFirstBlock = (props) => {
    const { attributes, setAttributes } = props;
    return (
        <div>
            <div>
                <InspectorControls>
                    <PanelBody
                        title="Most awesome settings ever"
                        initialOpen={true}
                    >
                        <PanelRow>
                            <ToggleControl
                                label="Toggle me"
                                checked={attributes.toggle}
                                onChange={(newval) => setAttributes({ toggle: newval })}
                            />
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>
                <div className="wrap">
                    <div className="image"><img/></div>
                    <div className="wrap-content">
                        <div className="header-content">
                            <RichText
                                tagName="h1"
                                placeholder="Write your heading here"
                                value={attributes.myRichHeading}
                                onChange={(newtext) => setAttributes({ myRichHeading: newtext })}
                            />
                        </div>
                        <p className="primary-content">
                            <RichText
                                tagName="p"
                                placeholder="Write your paragraph here"
                                value={attributes.myRichPrimary}
                                onChange={(newtext) => setAttributes({ myRichPrimary: newtext })}
                            />
                        </p>
                        <p className="secondary-content">
                            <RichText
                                tagName="p"
                                placeholder="Write your paragraph here"
                                value={attributes.myRichSecondary}
                                onChange={(newtext) => setAttributes({ myRichSecondary: newtext })}
                            />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

registerBlockType('awp/firstblock', {
    title: 'My first block',
    category: 'common',
    icon: 'smiley',
    description: 'Learning in progress',
    keywords: ['example', 'test'],
    attributes: {
        toggle: {
            type: 'boolean',
            default: true
        },
        myRichPrimary: {
            type: 'string',
            default: '',
            source: 'html',
            selector: 'p'
        },
        myRichHeading: {
            type: 'string',
            default: '',
            source: 'html',
            selector: 'h1'
        },
        myRichSecondary: {
            type: 'string',
            default: '',
            source: 'html',
            selector: 'p'
        }
    },
    edit: myFirstBlock,
    save: (props) => {
        const { attributes } = props;
        return (
            <div>
                <div className="wrap">
                    <div className="image"><img/></div>
                    <div className="wrap-content">
                        <div className="header-content">
                            <RichText
                                tagName="h1"
                                placeholder="Write your heading here"
                                value={attributes.myRichHeading}
                                onChange={(newtext) => setAttributes({ myRichHeading: newtext })}
                            />
                        </div>
                        <div className="primary-content">
                            <RichText
                                tagName="p"
                                value={attributes.myRichPrimary}
                            />
                        </div>
                        <div className="secondary-content">
                            <RichText
                                tagName="p"
                                value={attributes.myRichSecondary}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});