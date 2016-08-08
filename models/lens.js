// grab the packages that we need for the lens model
var mongoose    = require('mongoose'),
    Schema      = mongoose.Schema;

// lens schema
var LensSchema = new Schema({
    brand:          { type: String, default: '' },
    lensName:       { type: String, required: true },
    model:          { type: String, required: true, index: { unique: true }},
    price:          { type: Number, default: 0 },
    aperture:       { type: String, default: '' },
    focalRange:     { type: String, default: '' },
    filterSize:     { type: String, default: '' },
    mount:          { type: String, default: '' },
    stabilization:  { type: Boolean, default: false },
    afmotor:        { type: String, default: '' },
    zoomType:       { type: String, default: '' },
    frontElementRotates:  { type: Boolean, default: false },
    tripodMount:    { type: Boolean, default: false },
    color:          { type: String, default: '' },
    manualFocus:    { type: Boolean, default: false },
    numberOfLenses: { type: Number, default: 0 }, 
    numberOfGroups: { type: Number, default: 0 }, 
    diaphragmBlades:{ type: Number, default: 0 },
    length:         { type: String, default: '' },
    weight:         { type: String, default: '' },
    announced:      { type: String, default: '' },
    description:    { type: String, default: '' },
    useOne:         { type: String, default: '' },
    useTwo:         { type: String, default: '' },
    useThree:       { type: String, default: '' },
    useFour:        { type: String, default: '' },
    useFive:        { type: String, default: '' },
    useSix:         { type: String, default: '' },
    useSeven:       { type: String, default: '' },
    rank:           { type: Number, default: 0 },
    bestUse:        { type: String, default: '' },
    amazonLink:     { type: String, default: '' },
    bandhLink:      { type: String, default: '' },
    images:         [ { type: String } ],
    mainPicture:    {type: Schema.Types.Mixed},
    pictureTwo:     {type: Schema.Types.Mixed},
    pictureThree:     {type: Schema.Types.Mixed},
    pictureFour:     {type: Schema.Types.Mixed}
});

module.exports = mongoose.model('Lens', LensSchema);