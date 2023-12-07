"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsWritten = exports.setPlayerProfile = exports.setMigration = exports.setAutoExportLoadOrder = void 0;
const redux_act_1 = require("redux-act");
exports.setAutoExportLoadOrder = (0, redux_act_1.createAction)('BG3_SETTINGS_AUTO_EXPORT', (enabled) => enabled);
exports.setMigration = (0, redux_act_1.createAction)('BG3_SET_MIGRATION', (enabled) => enabled);
exports.setPlayerProfile = (0, redux_act_1.createAction)('BG3_SET_PLAYERPROFILE', name => name);
exports.settingsWritten = (0, redux_act_1.createAction)('BG3_SETTINGS_WRITTEN', (profile, time, count) => ({ profile, time, count }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQXlDO0FBRzVCLFFBQUEsc0JBQXNCLEdBQUcsSUFBQSx3QkFBWSxFQUFDLDBCQUEwQixFQUFFLENBQUMsT0FBZ0IsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDakcsUUFBQSxZQUFZLEdBQUcsSUFBQSx3QkFBWSxFQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBZ0IsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDaEYsUUFBQSxnQkFBZ0IsR0FBRyxJQUFBLHdCQUFZLEVBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2RSxRQUFBLGVBQWUsR0FBRyxJQUFBLHdCQUFZLEVBQUMsc0JBQXNCLEVBQUcsQ0FBQyxPQUFlLEVBQUUsSUFBWSxFQUFFLEtBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQWN0aW9uIH0gZnJvbSAncmVkdXgtYWN0JztcclxuXHJcbi8vIGFjdGlvbnNcclxuZXhwb3J0IGNvbnN0IHNldEF1dG9FeHBvcnRMb2FkT3JkZXIgPSBjcmVhdGVBY3Rpb24oJ0JHM19TRVRUSU5HU19BVVRPX0VYUE9SVCcsIChlbmFibGVkOiBib29sZWFuKSA9PiBlbmFibGVkKTtcclxuZXhwb3J0IGNvbnN0IHNldE1pZ3JhdGlvbiA9IGNyZWF0ZUFjdGlvbignQkczX1NFVF9NSUdSQVRJT04nLCAoZW5hYmxlZDogYm9vbGVhbikgPT4gZW5hYmxlZCk7XHJcbmV4cG9ydCBjb25zdCBzZXRQbGF5ZXJQcm9maWxlID0gY3JlYXRlQWN0aW9uKCdCRzNfU0VUX1BMQVlFUlBST0ZJTEUnLCBuYW1lID0+IG5hbWUpO1xyXG5leHBvcnQgY29uc3Qgc2V0dGluZ3NXcml0dGVuID0gY3JlYXRlQWN0aW9uKCdCRzNfU0VUVElOR1NfV1JJVFRFTicsICAocHJvZmlsZTogc3RyaW5nLCB0aW1lOiBudW1iZXIsIGNvdW50OiBudW1iZXIpID0+ICh7IHByb2ZpbGUsIHRpbWUsIGNvdW50IH0pKTtcclxuXHJcbiJdfQ==