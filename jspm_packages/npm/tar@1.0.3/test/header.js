/* */ 
(function(Buffer) {
  var tap = require("tap");
  var TarHeader = require("../lib/header");
  var tar = require("../tar");
  var fs = require("fs");
  var headers = {
    "a.txt file header": ["612e747874000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030303036343420003035373736312000303030303234200030303030303030303430312031313635313336303333332030313234353100203000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000757374617200303069736161637300000000000000000000000000000000000000000000000000007374616666000000000000000000000000000000000000000000000000000000303030303030200030303030303020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", {
      cksumValid: true,
      path: 'a.txt',
      mode: 420,
      uid: 24561,
      gid: 20,
      size: 257,
      mtime: 1319493851,
      cksum: 5417,
      type: '0',
      linkpath: '',
      ustar: 'ustar\0',
      ustarver: '00',
      uname: 'isaacs',
      gname: 'staff',
      devmaj: 0,
      devmin: 0,
      fill: ''
    }],
    "omega pax": ["5061784865616465722fcea92e74787400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030303036343420003035373736312000303030303234200030303030303030303137302031313534333731303631312030313530353100207800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000757374617200303069736161637300000000000000000000000000000000000000000000000000007374616666000000000000000000000000000000000000000000000000000000303030303030200030303030303020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", {
      cksumValid: true,
      path: 'PaxHeader/Ω.txt',
      mode: 420,
      uid: 24561,
      gid: 20,
      size: 120,
      mtime: 1301254537,
      cksum: 6697,
      type: 'x',
      linkpath: '',
      ustar: 'ustar\0',
      ustarver: '00',
      uname: 'isaacs',
      gname: 'staff',
      devmaj: 0,
      devmin: 0,
      fill: ''
    }],
    "omega file header": ["cea92e7478740000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030303036343420003035373736312000303030303234200030303030303030303030322031313534333731303631312030313330373200203000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000757374617200303069736161637300000000000000000000000000000000000000000000000000007374616666000000000000000000000000000000000000000000000000000000303030303030200030303030303020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", {
      cksumValid: true,
      path: 'Ω.txt',
      mode: 420,
      uid: 24561,
      gid: 20,
      size: 2,
      mtime: 1301254537,
      cksum: 5690,
      type: '0',
      linkpath: '',
      ustar: 'ustar\0',
      ustarver: '00',
      uname: 'isaacs',
      gname: 'staff',
      devmaj: 0,
      devmin: 0,
      fill: ''
    }],
    "foo.js file header": ["666f6f2e6a730000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030303036343420003035373736312000303030303234200030303030303030303030342031313534333637303734312030313236313700203000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000757374617200303069736161637300000000000000000000000000000000000000000000000000007374616666000000000000000000000000000000000000000000000000000000303030303030200030303030303020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", {
      cksumValid: true,
      path: 'foo.js',
      mode: 420,
      uid: 24561,
      gid: 20,
      size: 4,
      mtime: 1301246433,
      cksum: 5519,
      type: '0',
      linkpath: '',
      ustar: 'ustar\0',
      ustarver: '00',
      uname: 'isaacs',
      gname: 'staff',
      devmaj: 0,
      devmin: 0,
      fill: ''
    }],
    "b.txt file header": ["622e747874000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030303036343420003035373736312000303030303234200030303030303030313030302031313635313336303637372030313234363100203000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000757374617200303069736161637300000000000000000000000000000000000000000000000000007374616666000000000000000000000000000000000000000000000000000000303030303030200030303030303020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", {
      cksumValid: true,
      path: 'b.txt',
      mode: 420,
      uid: 24561,
      gid: 20,
      size: 512,
      mtime: 1319494079,
      cksum: 5425,
      type: '0',
      linkpath: '',
      ustar: 'ustar\0',
      ustarver: '00',
      uname: 'isaacs',
      gname: 'staff',
      devmaj: 0,
      devmin: 0,
      fill: ''
    }],
    "deep nested file": ["636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363633030303634342000303537373631200030303030323420003030303030303030313434203131363532313531353333203034333331340020300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000075737461720030306973616163730000000000000000000000000000000000000000000000000000737461666600000000000000000000000000000000000000000000000000000030303030303020003030303030302000722f652f612f6c2f6c2f792f2d2f642f652f652f702f2d2f662f6f2f6c2f642f652f722f2d2f702f612f742f680000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", {
      cksumValid: true,
      path: 'r/e/a/l/l/y/-/d/e/e/p/-/f/o/l/d/e/r/-/p/a/t/h/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc',
      mode: 420,
      uid: 24561,
      gid: 20,
      size: 100,
      mtime: 1319687003,
      cksum: 18124,
      type: '0',
      linkpath: '',
      ustar: 'ustar\0',
      ustarver: '00',
      uname: 'isaacs',
      gname: 'staff',
      devmaj: 0,
      devmin: 0,
      fill: ''
    }]
  };
  tap.test("parsing", function(t) {
    Object.keys(headers).forEach(function(name) {
      var h = headers[name],
          header = new Buffer(h[0], "hex"),
          expect = h[1],
          parsed = new TarHeader(header);
      t.has(parsed, expect, "parse " + name);
    });
    t.end();
  });
  tap.test("encoding", function(t) {
    Object.keys(headers).forEach(function(name) {
      var h = headers[name],
          expect = new Buffer(h[0], "hex"),
          encoded = TarHeader.encode(h[1]);
      var th = new TarHeader(encoded);
      delete h[1].block;
      delete h[1].needExtended;
      delete h[1].cksum;
      t.has(th, h[1], "fields " + name);
    });
    t.end();
  });
  tap.test("parseNumeric tests", function(t) {
    var parseNumeric = TarHeader.parseNumeric,
        numbers = {
          "303737373737373700": 2097151,
          "30373737373737373737373700": 8589934591,
          "303030303036343400": 420,
          "800000ffffffffffff": 281474976710655,
          "ffffff000000000001": -281474976710654,
          "ffffff000000000000": -281474976710655,
          "800000000000200000": 2097152,
          "8000000000001544c5": 1393861,
          "ffffffffffff1544c5": -15383354
        };
    Object.keys(numbers).forEach(function(n) {
      var b = new Buffer(n, "hex");
      t.equal(parseNumeric(b), numbers[n], n + " === " + numbers[n]);
    });
    t.end();
  });
})(require("buffer").Buffer);
