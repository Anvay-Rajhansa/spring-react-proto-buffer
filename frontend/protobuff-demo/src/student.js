/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.proto = (function() {

    /**
     * Namespace proto.
     * @exports proto
     * @namespace
     */
    var proto = {};

    proto.Student = (function() {

        /**
         * Properties of a Student.
         * @memberof proto
         * @interface IStudent
         * @property {number} id Student id
         * @property {string} firstName Student firstName
         * @property {string} lastName Student lastName
         */

        /**
         * Constructs a new Student.
         * @memberof proto
         * @classdesc Represents a Student.
         * @implements IStudent
         * @constructor
         * @param {proto.IStudent=} [properties] Properties to set
         */
        function Student(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Student id.
         * @member {number} id
         * @memberof proto.Student
         * @instance
         */
        Student.prototype.id = 0;

        /**
         * Student firstName.
         * @member {string} firstName
         * @memberof proto.Student
         * @instance
         */
        Student.prototype.firstName = "";

        /**
         * Student lastName.
         * @member {string} lastName
         * @memberof proto.Student
         * @instance
         */
        Student.prototype.lastName = "";

        /**
         * Creates a new Student instance using the specified properties.
         * @function create
         * @memberof proto.Student
         * @static
         * @param {proto.IStudent=} [properties] Properties to set
         * @returns {proto.Student} Student instance
         */
        Student.create = function create(properties) {
            return new Student(properties);
        };

        /**
         * Encodes the specified Student message. Does not implicitly {@link proto.Student.verify|verify} messages.
         * @function encode
         * @memberof proto.Student
         * @static
         * @param {proto.IStudent} message Student message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Student.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.firstName);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.lastName);
            return writer;
        };

        /**
         * Encodes the specified Student message, length delimited. Does not implicitly {@link proto.Student.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Student
         * @static
         * @param {proto.IStudent} message Student message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Student.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Student message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Student
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Student} Student
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Student.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Student();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.firstName = reader.string();
                    break;
                case 3:
                    message.lastName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("firstName"))
                throw $util.ProtocolError("missing required 'firstName'", { instance: message });
            if (!message.hasOwnProperty("lastName"))
                throw $util.ProtocolError("missing required 'lastName'", { instance: message });
            return message;
        };

        /**
         * Decodes a Student message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Student
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Student} Student
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Student.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Student message.
         * @function verify
         * @memberof proto.Student
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Student.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isString(message.firstName))
                return "firstName: string expected";
            if (!$util.isString(message.lastName))
                return "lastName: string expected";
            return null;
        };

        /**
         * Creates a Student message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.Student
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.Student} Student
         */
        Student.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.Student)
                return object;
            var message = new $root.proto.Student();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.firstName != null)
                message.firstName = String(object.firstName);
            if (object.lastName != null)
                message.lastName = String(object.lastName);
            return message;
        };

        /**
         * Creates a plain object from a Student message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.Student
         * @static
         * @param {proto.Student} message Student
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Student.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.firstName = "";
                object.lastName = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.firstName != null && message.hasOwnProperty("firstName"))
                object.firstName = message.firstName;
            if (message.lastName != null && message.hasOwnProperty("lastName"))
                object.lastName = message.lastName;
            return object;
        };

        /**
         * Converts this Student to JSON.
         * @function toJSON
         * @memberof proto.Student
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Student.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Student;
    })();

    proto.StudentCollection = (function() {

        /**
         * Properties of a StudentCollection.
         * @memberof proto
         * @interface IStudentCollection
         * @property {Array.<proto.IStudent>|null} [students] StudentCollection students
         */

        /**
         * Constructs a new StudentCollection.
         * @memberof proto
         * @classdesc Represents a StudentCollection.
         * @implements IStudentCollection
         * @constructor
         * @param {proto.IStudentCollection=} [properties] Properties to set
         */
        function StudentCollection(properties) {
            this.students = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StudentCollection students.
         * @member {Array.<proto.IStudent>} students
         * @memberof proto.StudentCollection
         * @instance
         */
        StudentCollection.prototype.students = $util.emptyArray;

        /**
         * Creates a new StudentCollection instance using the specified properties.
         * @function create
         * @memberof proto.StudentCollection
         * @static
         * @param {proto.IStudentCollection=} [properties] Properties to set
         * @returns {proto.StudentCollection} StudentCollection instance
         */
        StudentCollection.create = function create(properties) {
            return new StudentCollection(properties);
        };

        /**
         * Encodes the specified StudentCollection message. Does not implicitly {@link proto.StudentCollection.verify|verify} messages.
         * @function encode
         * @memberof proto.StudentCollection
         * @static
         * @param {proto.IStudentCollection} message StudentCollection message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StudentCollection.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.students != null && message.students.length)
                for (var i = 0; i < message.students.length; ++i)
                    $root.proto.Student.encode(message.students[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified StudentCollection message, length delimited. Does not implicitly {@link proto.StudentCollection.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.StudentCollection
         * @static
         * @param {proto.IStudentCollection} message StudentCollection message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StudentCollection.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StudentCollection message from the specified reader or buffer.
         * @function decode
         * @memberof proto.StudentCollection
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.StudentCollection} StudentCollection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StudentCollection.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.StudentCollection();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.students && message.students.length))
                        message.students = [];
                    message.students.push($root.proto.Student.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StudentCollection message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.StudentCollection
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.StudentCollection} StudentCollection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StudentCollection.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StudentCollection message.
         * @function verify
         * @memberof proto.StudentCollection
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StudentCollection.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.students != null && message.hasOwnProperty("students")) {
                if (!Array.isArray(message.students))
                    return "students: array expected";
                for (var i = 0; i < message.students.length; ++i) {
                    var error = $root.proto.Student.verify(message.students[i]);
                    if (error)
                        return "students." + error;
                }
            }
            return null;
        };

        /**
         * Creates a StudentCollection message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.StudentCollection
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.StudentCollection} StudentCollection
         */
        StudentCollection.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.StudentCollection)
                return object;
            var message = new $root.proto.StudentCollection();
            if (object.students) {
                if (!Array.isArray(object.students))
                    throw TypeError(".proto.StudentCollection.students: array expected");
                message.students = [];
                for (var i = 0; i < object.students.length; ++i) {
                    if (typeof object.students[i] !== "object")
                        throw TypeError(".proto.StudentCollection.students: object expected");
                    message.students[i] = $root.proto.Student.fromObject(object.students[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a StudentCollection message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.StudentCollection
         * @static
         * @param {proto.StudentCollection} message StudentCollection
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StudentCollection.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.students = [];
            if (message.students && message.students.length) {
                object.students = [];
                for (var j = 0; j < message.students.length; ++j)
                    object.students[j] = $root.proto.Student.toObject(message.students[j], options);
            }
            return object;
        };

        /**
         * Converts this StudentCollection to JSON.
         * @function toJSON
         * @memberof proto.StudentCollection
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StudentCollection.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StudentCollection;
    })();

    return proto;
})();

module.exports = $root;
