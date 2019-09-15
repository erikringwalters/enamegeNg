import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  constructor() {
  }

  name: string;
  liked: boolean;
  nameIndex: number;

  nameList: Array<string> = [];

  getName() {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  getRandomNumber(min, max) {
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    return random;
  }

  generateName(gender: string, race: string, length: string) {
    var name = "";
    var limit;

    limit = this.getLengthNumber(length);

    name = name + this.getRaceFragments(race, limit);

    name = name + this.getGenderStyle(gender);

    this.addToNameList(name);

    this.setName(name);
  }

  addToNameList(name: string) {
    if (this.nameList.length >= 100) {
      this.nameList.shift();
    }
    this.nameList.push(name);
    this.nameIndex = this.nameList.length - 1;
  }

  goToPreviousName() {
    if (this.nameIndex > 0) {
      this.nameIndex--;
    }
  }

  goToNextName() {
    if(this.nameIndex < this.nameList.length) {
      this.nameIndex++;
    }
  }

  getLengthNumber(length: string) {
    switch(length) {
      case "short":
        return 1;
      case "medium":
        return 2;
      case "long":
        return 3;
      default:
        return 2;
    }
  }

  getRaceFragments(race: string, limit: number) {
    var fragments = "";
    for(var i = 1; i <= limit; i++) {
      fragments = fragments + this.getRandomFragment(race, i);
    }
    return fragments;
  }

  getGenderStyle(gender: string) {
    switch(gender) {
      case "masculine":
        if(this.coinFlip()) {
          return "o";
        }
        return "";
      case "feminine":
        if(this.coinFlip()) {
          return "a";
        }
        return "";
      default:
        return "";
    }
  }

  coinFlip(): boolean {
    var num = this.getRandomNumber(0,1)
    if(num == 0) {
      return false;
    }
    else return true;
  }

  getRandomFragment(race: string, i: number) {
    return eval("this." + race + i)[
      this.getRandomNumber(0, eval("this." + race + i).length)
    ];
  }

  any1 = [
    "Cor", "Ara", "Fon", "Kar", "Yu", "Ton", "Phu", "Ro", "Oli", "Tre", "Luo", "Wua", "Biu",
    "Lau", "Lo", "Zun", "Su", "Fea", "Bri", "Eo", "Elo", "Pu", "Rua", "Kru", "Pi", "Viv", "Vin",
    "Blu", "Chu", "Ky", "Whe", "Qu", "Que", "Io", "Ma", "Mor", "Obe", "Ot", "Wi", "Za", "Ki", "Y",
    "No", "Ew", "Bu", "Ci", "Cy", "Cae", "Sa", "Xua", "Ex", "We", "Ti", "Tu", "Be", "Ne", "Me",
    "Pui", "Quo", "Mil", "Un", "Tru", "Zo", "De", "Dur", "Tur", "Ar", "Au", "Ko", "Ue", "Re", "E"
  ]
  orc1 = [
    "Ug", "Bug", "Lug", "Chug", "Trug", "Gor", "Bul", "Fol", "Uk", "Gro", "Bo", "Bu", "Cro", "Dul", "Wom",
    "Cho", "Glo", "Zo", "Ge", "Ga", "Che", "Who", "Ox", "Oof", "Gul", "Lurg", "Bla", "Arg", "Urg", "Urd",
    "Of", "Bofo", "Dru", "Grul", "Blu", "Urs", "Kru", "Fur", "Fee", "Fi", "Fo", "Fum", "Tru", "Po", "Zurl",
    "Zur", "Bo", "Plu", "Qu", "Ze", "Buf", "Zol", "Krug", "Bol", "Chol", "Kol", "Zor", "Zerg", "Emp", "Er",
    "Or", "Arl", "Cer", "Eal", "E", "Ok", "Om", "Mo", "No", "Ro", "Lo", "Be", "Gun", "Grug", "U"
  ]
  elf1 = [
    "Au", "Ue", "Ar", "Ith", "Ou", "Mar", "Cue", "Cet", "Ce", "Phi", "Il", "Wa", "Ya", "Ru", "Rua", "Em", "El",
    "Ma", "Uth", "Eo", "Un", "We", "Lu", "Lua", "Mun", "Cre", "O", "Que", "Um", "Zy", "Zau", "Ze", "Che", "Mi",
    "Ya", "Yu", "Ve", "Va", "Pul", "Ye", "Ne", "Na", "Ne", "Op", "Ax", "Axe", "Ina", "Yo", "Yu", "Ox", "En",
    "Bi", "Be", "Ba", "Ri", "Ru", "Ra", "Da", "Du", "De", "Dui", "Ca", "Cae", "Ul", "Me", "Mua", "Ge", "Hi",
    "U", "Ku", "Ka", "Ke", "Ki", "Mel", "Chu", "Eu", "Lo", "La", "Le", "Li", "Luk", "Ta", "Te", "Ti", "To"
  ]
  human1 = [
    "Ran", "Fao", "Ru", "Ul", "Fen", "Ade", "Mor", "Dom", "Dam", "Wil", "Mor", "Rin", "Tra", "Fel", "Cor", "Vin", "Mul", "Lew",
    "Fer", "Deg", "Dun", "Ste", "Vin", "Lew", "Gar", "Vor", "Phi", "Run", "Rel", "Gar", "Voa", "Eli", "Fra", "Men", "Bot", "Cie", "Ro",
    "Dab", "Jea", "Nen", "Pie", "Bel", "Bot", "Van", "Yel", "Syb", "Eda", "Fre", "Bie", "Ca", "Cal", "Lae", "Cha", "Ber", "Mic", "Mar",
    "Mau", "Eol", "Elo", "Hul", "Ase", "Ace", "Mil", "Cla", "Gur", "Cie", "Dar", "Ime", "Cos", "Od", "Ver", "One", "Bir", "Ryl", "Ken",
    "Kar", "Kul", "Kun", "Kil", "Myn", "Eck", "Tuc", "Kle", "Tul", "Asi", "Tho", "Thu", "The", "Meb", "Gel", "Gal", "Der", "Dul", "Und", "Er"
  ]
  ///
  any2 = [
    "oh", "uc", "pua", "war", "raw", "err", "tre", "mun", "um", "im", "cre", "lik", "ruc", "pul",
    "chu", "ma", "tae", "rao", "mua", "ik", "plu", "bo", "ba", "bre", "ip", "chur", "prim", "dif",
    "mod", "dor", "lir", "fru", "apu", "moa", "bo", "rech", "ich", "fim", "helle", "len", "vrun", "aul",
    "wel", "ter", "plo", "ban", "kan", "kuor", "flu", "pro", "dor", "pama", "shur", "shor", "shum", "shu",
    "tor", "ro", "lo", "ko", "do", "mo", "ji", "pij", "wyr", "que", "qua", "on", "che", "oe"
  ]
  orc2 = [
    "el", "eg", "hel", "chu", "ub", "bub", "ru", "fo", "um", "go", "ok", "tok", "mug", "nug", "bug", "uk", "kul",
    "tug", "op", "po", "mul", "nul", "rol", "col", "tol", "ol", "fol", "vo", "of", "wo", "zo", "oz", "al", "ut",
    "mut", "ux", "gro", "chol", "boo", "coo", "tu", "mup", "rud", "pum", "fum", "wub", "chub", "chum", "luk", "lok", "il",
    "mol", "nol", "jol", "uj", "ek", "wum", "gub", "vol", "pol", "wol", "u", "o", "ex", "quo", "bo", "glo", "to"
  ]
  elf2 = [
    "wel", "luk", "umb", "ich", "ar", "tche", "tel", "til", "mak", "kil", "mir", "lu", "hin", "ing", "ol", "mo", "ron", "nel",
    "ere", "sto", "ean", "arf", "ind", "ing", "agu", "in", "ala", "thil", "o", "go", "al", "la", "im", "do", "ald", "wi",
    "las", "ego", "dir", "di", "lun", "iri", "ell", "ro", "oph", "phe", "og", "um", "ae", "aer", "ero", "at", "urg", "ur",
    "uo", "alg", "tie", "ra", "on", "ah", "ta", "ag", "ed", "r", "we", "wi", "min", "dri", "ril", "kil", "kal", "a"
  ]
  human2 = [
    "et", "mut", "ik", "il", "el", "ge", "gel", "mud", "ok", "cul", "que", "ze", "ken", "ich", "fel", "fio", "fil", "chen", "pou",
    "min", "as", "la", "cas", "gas", "com", "up", "ya", "tor", "em", "vee", "see", "kin", "sho", "shi", "chus", "bra", "bur", "ope",
    "acu", "aci", "dor", "del", "pro", "duc", "cer", "zun", "zum", "zam", "sim", "chem", "dil", "ign", "twi", "sted", "do", "pe", "le",
    "an", "and", "the", "fan", "ta", "cre", "dit", "card", "san", "des", "cam", "mer", "sike", "des", "ine", "er", "bit", "get", "it"
  ]
  ///
  any3 = [
    "ou", "abe", "i", "mub", "och", "ode", "cer", "mor", "phine", "er", "ik", "po", "oke", "il", "ine", "co",
    "ver", "ame", "ien", "eck", "art", "tor", "um", "brum", "ello", "ith", "our", "outh", "ruff", "pur", "ette", "truk",
    "wor", "ord", "wim", "bur", "pul", "ry", "lub", "dine", "ters", "ey", "un", "ex", "ta", "cy", "mar", "io",
    "le", "da", "hud", "ong", "gue", "qure", "yu", "tiphe", "ire", "buor", "own", "in", "ing", "uop", "cam", "eje",
    "urt", "eip", "cho", "oze", "uz", "plur", "an", "eke", "eak", "in", "boo", "ox", "lexe", "pil", "wil", "be",
    "eign", "zol", "oel", "mor", "frub", "row", "ink", "dae", "ub", "lo", "om", "lip", "chren", "pho", "blur", "crul",
    "kar", "gor", "rill", "a", "blu", "plet", "cro", "fle", "bab", "chur", "ake", "nada", "ensa", "ight", "aze", "ive",
    "me", "it", "amus", "flur", "dil", "omie", "let", "ave", "aye", "idle", "ow", "no", "ye", "me", "u", "one"
  ]

  orc3 = [
    "uch", "ub", "lub", "nub", "ub", "ob", "u", "op", "mo", "om", "el", "ov", "os", "al", "wu", "ej", "je", "jer",
    "kom", "go", "aub", "or", "ah", "ag", "ig", "lug", "bug", "fug", "mug", "ush", "ij", "un", "cu", "pok", "ure", "um",
    "for", "ork", "bul", "owl", "nul", "hul", "chul", "cho", "oh", "fo", "ukle", "meb", "tul", "olk", "wul", "se", "il", "uke",
    "bel", "elt", "ult", "ulk", "bil", "cul", "orl", "dol", "crol", "ual", "nol", "mol", "khul", "old", "er", "or", "it", "up",
    "uj", "ej", "kuj", "kej", "kug", "keg", "ech", "oz", "wop", "al", "mul", "tic", "ur", "ob", "ab", "ba", "chu", "mu"
  ]
  elf3 = [
    "nor", "hor", "rie", "ire", "ras", "ra", "rod", "od", "oth", "roth", "ang", "hel", "red", "leg", "gon", "bel", "born", "ian",
    "bor", "gorm", "dan", "fin", "uf", "aer", "eth", "thor", "ion", "thel", "che", "ah", "hil", "ell", "los", "mak", "len", "el",
    "ire", "amme", "enwe", "elu", "nel", "itch", "ye", "ene", "dhil", "eol", "stor", "anor", "ilas", "le", "ak", "op", "iss", "und",
    "ur", "ae", "ce", "ie", "ile", "wi", "qu", "psy", "yel", "hyr", "aro", "am", "an", "en", "bo", "eb", "ze", "ew",
    "ig", "ige", "es", "ese", "ex", "me", "ike", "e", "ero", "yn", "sau", "esh", "ash", "ish", "rom", "mon", "cye", "cae"
  ]
  human3 = [
    "pan", "da", "hai", "res", "deol", "dol", "del", "ta", "tim", "my", "tur", "ner", "ya", "fur", "nan", "el", "ine", "ne", "bur",
    "ger", "gus", "lus", "ius", "on", "or", "and", "tian", "lav", "ox", "us", "tus", "uc", "i", "vu", "u", "nus", "ol", "tan",
    "nis", "on", "orn", "dut", "dur", "von", "tel", "wat", "ron", "ren", "dez", "vous", "ris", "spri", "red", "ard", "ur", "url", "arl",
    "mer", "hug", "rul", "us", "if", "y", "ou", "are", "rea", "din", "g", "thi", "s", "i", "hav", "e", "per", "ish", "ed", "l",
    "ol", "pub", "eg", "ug", "esh", "ech", "ush", "esh", "nil", "kog", "tud", "tun", "ish", "ush", "kre", "ol", "bay", "reb", "ro"
  ]
}
