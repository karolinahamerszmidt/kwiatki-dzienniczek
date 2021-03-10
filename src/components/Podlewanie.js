import React from "react";
import moment from "moment";

export const Podlewanie = () => {
  return (
    <div className="tabelka">
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/cytrynka.jpg`}
          className="kwiatek"
          alt="kwiatek"
        />
        <div>cytrynka</div>
        <div>1x</div>
        <div className="linia"></div>
        <div className="data">2.05.2020 (sobota)</div>
        <div className="data">11.05.2020 (wtorek)</div>
        <div className="data">18.05.2020 (poniedzialek)</div>
        <div className="data">25.05.2020 (poniedzialek)</div>
        <div className="data">1.06.2020 (poniedzialek)</div>
        <div className="data">8.06.2020 (poniedzialek)</div>
        <div>{moment("2020-06-08").format("dddd")}</div>
      </div>

      <div>
        <img
          src={`${process.env.PUBLIC_URL}/bstorczyk.jpg`}
          className="kwiatek"
          alt="kwiatek"
        />
        <div>b.storczyk</div>
        <div>1x</div>
        <div className="linia"></div>
        <div className="data">6.05.2020 (sroda)</div>
        <div className="data">13.05.2020 (sroda)</div>
        <div className="data">20.05.2020 (sroda)</div>
        <div className="data">27.05.2020 (sroda)</div>
        <div className="data">3.06.2020 (sroda)</div>
      </div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/rstorczyk.png`}
          className="kwiatek"
          alt="kwiatek"
        />
        <div>r.storczyk</div>
        <div>1x</div>
        <div className="linia"></div>
        <div className="data">6.05.2020 (sroda)</div>
        <div className="data">13.05.2020 (sroda)</div>
        <div className="data">20.05.2020 (sroda)</div>
        <div className="data">27.05.2020 (sroda)</div>
        <div className="data">3.06.2020 (sroda)</div>
      </div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/skrzydlokwiat.jpg`}
          className="kwiatek"
          alt="kwiatek"
        />
        <div>skrzydlokwiat</div>
        <div>2-3x</div>
        <div className="linia"></div>
        <div className="data">30.05.2020 (sobota)</div>
        <div className="data">1.06.2020 (poniedzialek)</div>
        <div className="data">5.06.2020 (piatek)</div>
      </div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/rgloksyna.jpg`}
          className="kwiatek"
          alt="kwiatek"
        />
        <div>r.gloksyna</div>
        <div>2x</div>
        <div className="linia"></div>
        <div className="data">26.05.2020 (wtorek)</div>
        <div className="data">30.05.2020 (sobota)</div>
        <div className="data">2.06.2020 (wtorek)</div>
        <div className="data">6.06.2020 (sobota)</div>
      </div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/fgloksyna.jpg`}
          className="kwiatek"
          alt="kwiatek"
        />
        <div>f.gloksyna</div>
        <div>2x</div>
        <div className="linia"></div>
        <div className="data">26.05.2020 (wtorek)</div>
        <div className="data">30.05.2020 (sobota)</div>
        <div className="data">2.06.2020 (wtorek)</div>
        <div className="data">6.06.2020 (sobota)</div>
      </div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/vriesea.jpg`}
          className="kwiatek"
          alt="kwiatek"
        />
        <div>vriesea</div>
        <div>1x</div>
        <div className="linia"></div>
        <div className="data">8.06.2020 (poniedzialek)</div>
      </div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/hibiskus.jpg`}
          className="kwiatek"
          alt="kwiatek"
        />
        <div>hibiskus</div>
        <div>1x</div>
        <div className="linia"></div>
      </div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/skrzydlokwiat.jpg`}
          className="kwiatek"
          alt="kwiatek"
        />
        <div>skrzydlokwiat2</div>
        <div>2-3x</div>
        <div className="linia"></div>
      </div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/bstorczyk.jpg`}
          className="kwiatek"
          alt="kwiatek"
        />
        <div>bstorczyk2</div>
        <div>1x</div>
        <div className="linia"></div>
      </div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/rstorczyk.png`}
          className="kwiatek"
          alt="kwiatek"
        />
        <div>rstorczyk2</div>
        <div>1x</div>
        <div className="linia"></div>
      </div>
    </div>
  );
};
