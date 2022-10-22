import PropTypes from "prop-types";
import { FunctionComponent, useContext, useState, useMemo, createContext } from "react";

const defaultEwokContext = {
    team: "Instructor",
    server: "0a2b",
    ULIF: [],
    DLRF: [],
    satEnv: [
        {id: 12, server: '0a2b', conn: 12, team: 'Victor', cf: 6550, bw: 30, power: -88, sat: 'Satellite A', stage: "ULRF"},
        {id: 13, server: '0a2b', conn: 13, team: 'Victor', cf: 12750, bw: 10, power: -87, sat: 'Satellite B', stage: "ULRF"},
        {id: 14, server: '0a2b', conn: 14, team: 'Whiskey', cf: 6650, bw: 30, power: -88, sat: 'Satellite A', stage: "ULRF"},
        {id: 15, server: '0a2c', conn: 15, team: 'Whiskey', cf: 12550, bw: 30, power: -88, sat: 'Satellite B', stage: "ULRF"},
        {id: 16, server: '0a2c', conn: 16, team: 'Xray', cf: 30550, bw: 30, power: -88, sat: 'Satellite C', stage: "ULRF"},
        {id: 17, server: '0a2c', conn: 17, team: 'Yankee', cf: 6850, bw: 30, power: -88, sat: 'Satellite A', stage: "ULRF"},
        {id: 18, server: '0a2c', conn: 18, team: 'Zulu', cf: 12200, bw: 30, power: -88, sat: 'Satellite B', stage: "ULRF"},
    ],
    DLIF: [],
    equipment: [
        {id: 1, conn: 'asbkj', server: '0a2b', team: 'Instructor', unit_type: 'Group_X', unit_name: 'Signal_01', cf: 6550, bw: 10, power: -90, sat: 'Satellite A', feed: 'Feed 01', active: false},
        {id: 2, conn: 'sfsdk', server: '0a2b', team: 'Instructor', unit_type: 'Group_X', unit_name: 'Signal_02', cf: 6560, bw: .5, power: -90, sat: 'Satellite A', feed: 'Feed 02', active: false},
        {id: 3, conn: '237sf', server: '0a2b', team: 'Instructor', unit_type: 'Group_X', unit_name: 'Signal_03', cf: 6565, bw: .5, power: -90, sat: 'Satellite A', feed: 'Feed 03', active: false},
        {id: 4, conn: '7sdfn', server: '0a2c', team: 'Instructor', unit_type: 'Group_2', unit_name: 'TheBigOne', cf: 12300, bw: 50, power: -87, sat: 'Satellite B', feed: 'Feed 04', active: false},
        {id: 5, conn: '23fsj', server: '0a2c', team: 'Instructor', unit_type: 'Group_2', unit_name: 'TheLittleOne', cf: 30565, bw: .5, power: -90, sat: 'Satellite C', feed: 'Feed 05', active: false},
    ]
};

const EwokContext = createContext({} as IEwokContext);

const EwokProvider: FunctionComponent<EwokProviderProps> = ({ children }) => {
    const [ewok, setEwokState] = useState(defaultEwokContext);

    const setEwok = (update: any) => {
        console.log("updating Ewok", update);
        const dbEquipmentDELETE = ewok.equipment.filter(x => !update.equipment.includes(x))[0];
        // const dbEquipmentPOST = update.equipment.filter(x => !ewok.equipment.includes(x))[0];
        // console.log("Equipment to be deleted: ", dbEquipmentDELETE)
        // console.log("Equipment to be deleted: ", dbEquipmentPOST)
        // TODO: handle patch, post, delete, and socket emit here

        // TODO: on ULRF change, update DLRF
        // TODO: on DLRF change, update DLIF
        setEwokState(update)
    };

    const value: any = useMemo(() => ({
        ewok, setEwok
    }), [ewok]);

    return (
        <EwokContext.Provider value = {value}>
            {children}
        </EwokContext.Provider>
    )
}

const useEwokContext = (): IEwokContext => useContext(EwokContext);

EwokProvider.propTypes = {
    children: PropTypes.node
};

export { EwokProvider, EwokContext, useEwokContext };