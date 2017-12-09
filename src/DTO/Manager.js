const Endpoint = require("../util/Endpoint.js");
const Entity = require("../DTO/Entity.js");

/**
 * @class
 * @abstract
 * @desc Abstract DTO manager
 */
class Manager {
  /**
   * @constructor
   * @param {Mapper} mapper
   * @param {Client} client
   */
  constructor(mapper, client, token = null) {
    /**
     * @type {Mapper}
     * @private
     */
    this._mapper = mapper;
    /**
     * @type {RestClient}
     * @private
     */
    this._client = client;
    /**
     * @type {string}
     * @private
     */
    this._token = token;
    /**
     * REST Client calling args
     * @type {Object}
     */
    this.rcArgs = {};
  }

  /**
   * @type {Mapper}
   */
  get mapper() {
    return this._mapper;
  }

  /**
   * @type {RestClient}
   * @readonly
   */
  get client() {
    return this._client;
  }
 
  /**
   * Fetch an array of entities
   * @param {Endpoint} endpoint REST Endpoint (path, path args)
   * @param {Entity|DtoData} entity Entity or DTO data
   * @param {QueryObject} query Parameters for querying REST call
   * @param {*} rcArgs Additional arguments for REST exec method
   * @returns {Promise<Entity[]>}
   */
  async fetchArray(endpoint, query = null, rcArgs = null) {
    let { content, meta } = await this.client.get(endpoint.escapePath(), query, this.token, rcArgs || this.rcArgs);
    return this.mapper.mapArray(content, meta);
  }

  /**
   * Fetch a collection of entities (GET)
   * @param {Endpoint} endpoint REST Endpoint (path, path args)
   * @param {QueryObject} query Parameters for querying REST call
   * @param {*} rcArgs Additional arguments for REST exec method
   * @returns {Promise<Collection<string, Entity>>}
   */
  async fetchCollection(endpoint, query = null, rcArgs = null) {
    let { content, meta } = await this.client.get(endpoint.escapePath(), query, this.token, rcArgs || this.rcArgs);
    return this.mapper.mapCollection(content, meta);
  }

  /**
   * Fetch a single entity (GET)
   * @param {Endpoint} endpoint REST Endpoint (path, path args)
   * @param {QueryObject} query Parameters for querying REST call
   * @param {*} rcArgs Additional arguments for REST exec method
   * @returns {Promise<Entity>}
   */
  async fetchEntity(endpoint, query = null, rcArgs = null) {
    let { content, meta } = await this.client.get(endpoint.escapePath(), query, this.token, rcArgs || this.rcArgs);
    return this.mapper.mapEntity(content, meta);
  }

  /**
   * Push new entity (CREATE)
   * @param {Endpoint} endpoint REST Endpoint (path, path args)
   * @param {Entity|DtoData} entity Entity or DTO data
   * @param {QueryObject} query Parameters for querying REST call
   * @param {*} rcArgs Additional arguments for REST exec method
   * @returns {Promise<Entity>}
   */
  async pushEntity(endpoint, entity, query = null, rcArgs = null) {
    let { content, meta } = await this.client.post(endpoint.escapePath(), entity, query, this.token, rcArgs || this.rcArgs);
    return this.mapper.mapEntity(content, meta);
  }

  /**
   * Patch update entity (PATCH)
   * @param {Endpoint} endpoint REST Endpoint (path, path args)
   * @param {Entity|DtoData} entity Entity or DTO data
   * @param {QueryObject} query Parameters for querying REST call
   * @param {*} rcArgs Additional arguments for REST exec method
   * @returns {Promise<Entity,MetaInfo>}
   */
  async patchEntity(endpoint, entity, query = null, rcArgs = null) {
    let { content, meta } = await this.client.patch(endpoint.escapePath(), entity, query, this.token, rcArgs || this.rcArgs);
    return this.mapper.mapEntity(content, meta);
  }

  /**
   * Replace update entity (PUT)
   * @param {Endpoint} endpoint REST Endpoint (path, path args)
   * @param {Entity|DtoData} entity Entity or DTO data
   * @param {QueryObject} query Parameters for querying REST call
   * @param {*} rcArgs Additional arguments for REST exec method
   * @returns {Promise<ResultSet<Entity,MetaInfo>>}
   */
  async replaceEntity(endpoint, entity, query = null, rcArgs = null) {
    let { content, meta } = await this.client.put(endpoint.escapePath(), entity, query, this.token, rcArgs || this.rcArgs);
    return this.mapper.mapEntity(content, meta);
  }
}

module.exports = Manager;

/**
 * @callback Manager~constructEntity
 * @param {DtoData} data
 */