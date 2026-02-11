var APP_DATA = {
  "scenes": [
    {
      "id": "0-foyer",
      "name": "foyer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7456141227758444,
          "pitch": 0.2148985822209415,
          "rotation": 1.5707963267948966,
          "target": "1-common-area"
        },
        {
          "yaw": 1.4056512033135231,
          "pitch": 0.11390664668136097,
          "rotation": 6.283185307179586,
          "target": "2-dining-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-common-area",
      "name": "common area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7163507581401847,
          "pitch": 0.1436389916495493,
          "rotation": 1.5707963267948966,
          "target": "0-foyer"
        },
        {
          "yaw": -2.8376033755791195,
          "pitch": 0.16415401550788644,
          "rotation": 1.5707963267948966,
          "target": "2-dining-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining-area",
      "name": "dining area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.19824381046309014,
          "pitch": 0.05465318659544138,
          "rotation": 3.141592653589793,
          "target": "3-family-living"
        },
        {
          "yaw": 2.758600795744006,
          "pitch": 0.2199965167720883,
          "rotation": 4.71238898038469,
          "target": "1-common-area"
        },
        {
          "yaw": -2.428950626210966,
          "pitch": 0.2637676836884282,
          "rotation": 3.141592653589793,
          "target": "4-main-kitchen"
        },
        {
          "yaw": -2.111684337812111,
          "pitch": 0.11820299804173473,
          "rotation": 1.5707963267948966,
          "target": "5-utility"
        },
        {
          "yaw": -0.39376376802899493,
          "pitch": 0.08910588793273178,
          "rotation": 0,
          "target": "9-parents-room"
        },
        {
          "yaw": 0.46357158325832515,
          "pitch": 0.007257884937924786,
          "rotation": 1.5707963267948966,
          "target": "7-master-bedroom"
        },
        {
          "yaw": 0.8183709291499817,
          "pitch": 0.15931844253594285,
          "rotation": 1.5707963267948966,
          "target": "11-kids-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-family-living",
      "name": "family living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.39821876784878,
          "pitch": 0.11996185257952519,
          "rotation": 3.141592653589793,
          "target": "2-dining-area"
        },
        {
          "yaw": -1.69920716471567,
          "pitch": 0.05213780709843974,
          "rotation": 6.283185307179586,
          "target": "1-common-area"
        },
        {
          "yaw": -1.3240221127965839,
          "pitch": 0.02439634385593692,
          "rotation": 6.283185307179586,
          "target": "4-main-kitchen"
        },
        {
          "yaw": 2.4183793961498203,
          "pitch": 0.10550850082846353,
          "rotation": 0,
          "target": "7-master-bedroom"
        },
        {
          "yaw": -2.1436122729389826,
          "pitch": 0.08728621173729323,
          "rotation": 0,
          "target": "11-kids-room"
        },
        {
          "yaw": -0.7355001754979966,
          "pitch": 0.09486932675438453,
          "rotation": 7.0685834705770345,
          "target": "10-playroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-main-kitchen",
      "name": "main kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.256529077736884,
          "pitch": 0.2062792163283511,
          "rotation": 3.141592653589793,
          "target": "2-dining-area"
        },
        {
          "yaw": -2.64754547162058,
          "pitch": 0.09971963864065536,
          "rotation": 3.9269908169872414,
          "target": "3-family-living"
        },
        {
          "yaw": 1.7095488791266735,
          "pitch": 0.18439068933317415,
          "rotation": 0,
          "target": "5-utility"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-utility",
      "name": "utility",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5451740296128875,
          "pitch": 0.17989735117730277,
          "rotation": 1.5707963267948966,
          "target": "4-main-kitchen"
        },
        {
          "yaw": 2.566122782981604,
          "pitch": 0.20081879641893963,
          "rotation": 4.71238898038469,
          "target": "6-maid-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-maid-room",
      "name": "Maid room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.370997052869935,
          "pitch": 0.09088726677046033,
          "rotation": 7.0685834705770345,
          "target": "5-utility"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-master-bedroom",
      "name": "master bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7310789193808258,
          "pitch": 0.021578374443423698,
          "rotation": 6.283185307179586,
          "target": "3-family-living"
        },
        {
          "yaw": -1.0727947844882522,
          "pitch": 0.05286741785600668,
          "rotation": 5.497787143782138,
          "target": "8-master-wardrobe"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-master-wardrobe",
      "name": "master wardrobe",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7975291866008227,
          "pitch": 0.3125744054054067,
          "rotation": 9.42477796076938,
          "target": "7-master-bedroom"
        },
        {
          "yaw": 2.100473975650498,
          "pitch": 0.37194151681632803,
          "rotation": 5.497787143782138,
          "target": "3-family-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-parents-room",
      "name": "parents room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1234784973679215,
          "pitch": 0.06515872647132781,
          "rotation": 6.283185307179586,
          "target": "3-family-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-playroom",
      "name": "playroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3719552809677555,
          "pitch": 0.08504310070463106,
          "rotation": 4.71238898038469,
          "target": "3-family-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-kids-room",
      "name": "kids room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.151567706276958,
          "pitch": 0.1246391285671411,
          "rotation": 1.5707963267948966,
          "target": "3-family-living"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
