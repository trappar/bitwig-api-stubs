function PrimaryDevice(){
}

PrimaryDevice.prototype = new Device();
PrimaryDevice.prototype.constructor = PrimaryDevice;

/**
 * @param {PrimaryDevice.DeviceType} deviceType
 * @param {PrimaryDevice.ChainLocation} chainLocation
 * @param {function} callback
 */
PrimaryDevice.prototype.addCanSwitchToDeviceObserver = function(deviceType, chainLocation, callback){};

/**
 * @param {PrimaryDevice.DeviceType} deviceType
 * @param {PrimaryDevice.ChainLocation} chainLocation
 */
PrimaryDevice.prototype.switchToDevice = function(deviceType, chainLocation){};

/**
 * Chain Location enum.
 */
PrimaryDevice.ChainLocation = {
  FIRST:1,
  LAST:2,
  NEXT:3,
  PREVIOUS:4
};

/**
 * Returns the enum constant of this type with the specified name. The string must match exactly an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.)
 * @param {string} name - the name of the enum constant to be returned.
 * @returns the enum constant with the specified name
 * @throws IllegalArgumentException - if this enum type has no constant with the specified name
 * @throws NullPointerException - if the argument is null
 */
PrimaryDevice.ChainLocation.valueOf = function(name) {};

/**
 * Returns an array containing the constants of this enum type, in the order they are declared. This method may be used to iterate over the constants as follows:
 * for (PrimaryDevice.ChainLocation c : PrimaryDevice.ChainLocation.values())
 *     System.out.println(c);
 * @returns an array containing the constants of this enum type, in the order they are declared
 */
PrimaryDevice.ChainLocation.values = function() {};

/**
 * Device Type enum.
 *
 */
PrimaryDevice.DeviceType = {
  ANY:1
};

/**
 * Returns the enum constant of this type with the specified name. The string must match exactly an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.)
 * @param {string} name - the name of the enum constant to be returned.
 * @returns the enum constant with the specified name
 * @throws IllegalArgumentException - if this enum type has no constant with the specified name
 * @throws NullPointerException - if the argument is null
 */
PrimaryDevice.DeviceType.valueOf = function(name) {};

/**
 * Returns an array containing the constants of this enum type, in the order they are declared. This method may be used to iterate over the constants as follows:
 * for (PrimaryDevice.DeviceType c : PrimaryDevice.DeviceType.values())
 *     System.out.println(c);
 * @returns an array containing the constants of this enum type, in the order they are declared
 */
PrimaryDevice.DeviceType.values = function() {};