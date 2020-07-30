/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/diagnosticsMappers";
import * as Parameters from "../models/parameters";
import { KuduClientContext } from "../kuduClientContext";

/** Class representing a Diagnostics. */
export class Diagnostics {
  private readonly client: KuduClientContext;

  /**
   * Create a Diagnostics.
   * @param {KuduClientContext} client Reference to the service client.
   */
  constructor(client: KuduClientContext) {
    this.client = client;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.DiagnosticsGetLogResponse>
   */
  getLog(options?: msRest.RequestOptionsBase): Promise<Models.DiagnosticsGetLogResponse>;
  /**
   * @param callback The callback
   */
  getLog(callback: msRest.ServiceCallback<any>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getLog(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
  getLog(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.DiagnosticsGetLogResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getLogOperationSpec,
      callback) as Promise<Models.DiagnosticsGetLogResponse>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.DiagnosticsGetLog1Response>
   */
  getLog1(options?: msRest.RequestOptionsBase): Promise<Models.DiagnosticsGetLog1Response>;
  /**
   * @param callback The callback
   */
  getLog1(callback: msRest.ServiceCallback<any>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getLog1(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
  getLog1(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.DiagnosticsGetLog1Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getLog1OperationSpec,
      callback) as Promise<Models.DiagnosticsGetLog1Response>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.DiagnosticsGetAllResponse>
   */
  getAll(options?: msRest.RequestOptionsBase): Promise<Models.DiagnosticsGetAllResponse>;
  /**
   * @param callback The callback
   */
  getAll(callback: msRest.ServiceCallback<any>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getAll(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
  getAll(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.DiagnosticsGetAllResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getAllOperationSpec,
      callback) as Promise<Models.DiagnosticsGetAllResponse>;
  }

  /**
   * @param newSettings
   * @param [options] The optional parameters
   * @returns Promise<Models.DiagnosticsSetResponse>
   */
  set(newSettings: Models.DiagnosticsSettings, options?: msRest.RequestOptionsBase): Promise<Models.DiagnosticsSetResponse>;
  /**
   * @param newSettings
   * @param callback The callback
   */
  set(newSettings: Models.DiagnosticsSettings, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param newSettings
   * @param options The optional parameters
   * @param callback The callback
   */
  set(newSettings: Models.DiagnosticsSettings, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
  set(newSettings: Models.DiagnosticsSettings, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.DiagnosticsSetResponse> {
    return this.client.sendOperationRequest(
      {
        newSettings,
        options
      },
      setOperationSpec,
      callback) as Promise<Models.DiagnosticsSetResponse>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.DiagnosticsGetAll1Response>
   */
  getAll1(options?: msRest.RequestOptionsBase): Promise<Models.DiagnosticsGetAll1Response>;
  /**
   * @param callback The callback
   */
  getAll1(callback: msRest.ServiceCallback<any>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getAll1(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
  getAll1(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.DiagnosticsGetAll1Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getAll1OperationSpec,
      callback) as Promise<Models.DiagnosticsGetAll1Response>;
  }

  /**
   * @param newSettings
   * @param [options] The optional parameters
   * @returns Promise<Models.DiagnosticsSet1Response>
   */
  set1(newSettings: Models.DiagnosticsSettings, options?: msRest.RequestOptionsBase): Promise<Models.DiagnosticsSet1Response>;
  /**
   * @param newSettings
   * @param callback The callback
   */
  set1(newSettings: Models.DiagnosticsSettings, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param newSettings
   * @param options The optional parameters
   * @param callback The callback
   */
  set1(newSettings: Models.DiagnosticsSettings, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
  set1(newSettings: Models.DiagnosticsSettings, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.DiagnosticsSet1Response> {
    return this.client.sendOperationRequest(
      {
        newSettings,
        options
      },
      set1OperationSpec,
      callback) as Promise<Models.DiagnosticsSet1Response>;
  }

  /**
   * @param key
   * @param [options] The optional parameters
   * @returns Promise<Models.DiagnosticsGetResponse>
   */
  get(key: string, options?: msRest.RequestOptionsBase): Promise<Models.DiagnosticsGetResponse>;
  /**
   * @param key
   * @param callback The callback
   */
  get(key: string, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param key
   * @param options The optional parameters
   * @param callback The callback
   */
  get(key: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
  get(key: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.DiagnosticsGetResponse> {
    return this.client.sendOperationRequest(
      {
        key,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.DiagnosticsGetResponse>;
  }

  /**
   * @param key
   * @param [options] The optional parameters
   * @returns Promise<Models.DiagnosticsDeleteMethodResponse>
   */
  deleteMethod(key: string, options?: msRest.RequestOptionsBase): Promise<Models.DiagnosticsDeleteMethodResponse>;
  /**
   * @param key
   * @param callback The callback
   */
  deleteMethod(key: string, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param key
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(key: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
  deleteMethod(key: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.DiagnosticsDeleteMethodResponse> {
    return this.client.sendOperationRequest(
      {
        key,
        options
      },
      deleteMethodOperationSpec,
      callback) as Promise<Models.DiagnosticsDeleteMethodResponse>;
  }

  /**
   * @param key
   * @param [options] The optional parameters
   * @returns Promise<Models.DiagnosticsGet1Response>
   */
  get1(key: string, options?: msRest.RequestOptionsBase): Promise<Models.DiagnosticsGet1Response>;
  /**
   * @param key
   * @param callback The callback
   */
  get1(key: string, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param key
   * @param options The optional parameters
   * @param callback The callback
   */
  get1(key: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
  get1(key: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.DiagnosticsGet1Response> {
    return this.client.sendOperationRequest(
      {
        key,
        options
      },
      get1OperationSpec,
      callback) as Promise<Models.DiagnosticsGet1Response>;
  }

  /**
   * @param key
   * @param [options] The optional parameters
   * @returns Promise<Models.DiagnosticsDelete1Response>
   */
  delete1(key: string, options?: msRest.RequestOptionsBase): Promise<Models.DiagnosticsDelete1Response>;
  /**
   * @param key
   * @param callback The callback
   */
  delete1(key: string, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param key
   * @param options The optional parameters
   * @param callback The callback
   */
  delete1(key: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
  delete1(key: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.DiagnosticsDelete1Response> {
    return this.client.sendOperationRequest(
      {
        key,
        options
      },
      delete1OperationSpec,
      callback) as Promise<Models.DiagnosticsDelete1Response>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.DiagnosticsGetRecentLogsResponse>
   */
  getRecentLogs(options?: Models.DiagnosticsGetRecentLogsOptionalParams): Promise<Models.DiagnosticsGetRecentLogsResponse>;
  /**
   * @param callback The callback
   */
  getRecentLogs(callback: msRest.ServiceCallback<any>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getRecentLogs(options: Models.DiagnosticsGetRecentLogsOptionalParams, callback: msRest.ServiceCallback<any>): void;
  getRecentLogs(options?: Models.DiagnosticsGetRecentLogsOptionalParams | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.DiagnosticsGetRecentLogsResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getRecentLogsOperationSpec,
      callback) as Promise<Models.DiagnosticsGetRecentLogsResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getLogOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "dump",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    default: {}
  },
  serializer
};

const getLog1OperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "api/dump",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    default: {}
  },
  serializer
};

const getAllOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "diagnostics/settings",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    default: {}
  },
  serializer
};

const setOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "diagnostics/settings",
  requestBody: {
    parameterPath: "newSettings",
    mapper: {
      ...Mappers.DiagnosticsSettings,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    default: {}
  },
  serializer
};

const getAll1OperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "api/diagnostics/settings",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    default: {}
  },
  serializer
};

const set1OperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "api/diagnostics/settings",
  requestBody: {
    parameterPath: "newSettings",
    mapper: {
      ...Mappers.DiagnosticsSettings,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    default: {}
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "diagnostics/settings/{key}",
  urlParameters: [
    Parameters.key
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    default: {}
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "diagnostics/settings/{key}",
  urlParameters: [
    Parameters.key
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    default: {}
  },
  serializer
};

const get1OperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "api/diagnostics/settings/{key}",
  urlParameters: [
    Parameters.key
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    default: {}
  },
  serializer
};

const delete1OperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "api/diagnostics/settings/{key}",
  urlParameters: [
    Parameters.key
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    default: {}
  },
  serializer
};

const getRecentLogsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "api/logs/recent",
  queryParameters: [
    Parameters.top
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    default: {}
  },
  serializer
};
