export class Lens {
    lensName:       string;
    model:          string;
    price:          number;
    aperture:       string;
    focalRange:     string;
    filterSize:     string;
    mount:          string;
    stabilization:  boolean;
    afmotor:        string;
    zoomType:       string;
    frontElementRotates:  boolean;
    tripodMount:    boolean;
    color:          string;
    manualFocus:    boolean;
    numberOfLenses: number;
    numberOfGroups: number;
    diaphragmBlades:number;
    length:         string;
    weight:         string;
    announced:      string;
    description:    string;
    useOne:         string;
    useTwo:         string;
    useThree:       string;
    useFour:        string;
    useFive:        string;
    useSix:         string;
    useSeven:       string;
    rank:           string;
    bestUse:        string;
    amazonLink:     string;
    bandhLink:      string;
    brand:          string;

    constructor(
        lensName:       string,
        model?:          string,
        price?:          number,
        aperture?:       string,
        focalRange?:     string,
        filterSize?:     string,
        mount?:          string,
        stabilization?:  boolean,
        afmotor?:        string,
        zoomType?:       string,
        frontElementRotates?:  boolean,
        tripodMount?:    boolean,
        color?:          string,
        manualFocus?:    boolean,
        numberOfLenses?: number,
        numberOfGroups?: number,
        diaphragmBlades?:number,
        length?:         string,
        weight?:         string,
        announced?:      string,
        description?:    string,
        useOne?:         string,
        useTwo?:         string,
        useThree?:       string,
        useFour?:        string,
        useFive?:        string,
        useSix?:         string,
        useSeven?:       string,
        rank?:           string,
        bestUse?:        string,
        amazonLink?:     string,
        bandhLink?:      string,
        brand?:          string
    ) {
        this.lensName = lensName;
        this.model = model;
        this.price = price;
        this.aperture = aperture;
        this.focalRange = focalRange;
        this.filterSize = filterSize;
        this.mount = mount;
        this.stabilization = stabilization;
        this.afmotor = afmotor;
        this.zoomType = zoomType;
        this.frontElementRotates = frontElementRotates;
        this.tripodMount = tripodMount;
        this.color = color;
        this.manualFocus = manualFocus;
        this.numberOfLenses = numberOfLenses;
        this.numberOfGroups = numberOfGroups;
        this.diaphragmBlades = diaphragmBlades;
        this.length = length;
        this.weight = weight;
        this.announced = announced;
        this.description = description;
        this.useOne = useOne;
        this.useTwo = useTwo;
        this.useThree = useThree;
        this.useFour = useFour;
        this.useFive = useFive;
        this.useSix = useSix;
        this.useSeven = useSeven;
        this.rank = rank;
        this.bestUse = bestUse;
        this.amazonLink = amazonLink;
        this.bandhLink = bandhLink;
        this.brand = brand;
    }
}