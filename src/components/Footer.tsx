export const Footer: React.FC = () =>{

    return (
        <div className="footer">
        <section className="bg-white py-8">
        <div className="container py-8 px-6 mx-auto ">
          <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8">
            About
          </a>

          <p className="mt-8 mb-8">
            This template is inspired by the stunning nordic minamalist design -
            in particular:
            <br />
            <a
              className="text-gray-800 underline hover:text-gray-900"
              href="http://savoy.nordicmade.com/"
              target="_blank"
            >
              Savoy Theme
            </a>{" "}
            created by{" "}
            <a
              className="text-gray-800 underline hover:text-gray-900"
              href="https://nordicmade.com/"
            >
              https://nordicmade.com/
            </a>{" "}
            and{" "}
            <a
              className="text-gray-800 underline hover:text-gray-900"
              href="https://www.metricdesign.no/"
              target="_blank"
            >
              https://www.metricdesign.no/
            </a>
          </p>

          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur <a>random link</a>{" "}
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Vel risus commodo viverra maecenas accumsan
            lacus vel facilisis volutpat. Vitae aliquet nec ullamcorper sit.
            Nullam eget felis eget nunc lobortis mattis aliquam. In est ante in
            nibh mauris. Egestas congue quisque egestas diam in. Facilisi nullam
            vehicula ipsum a arcu. Nec nam aliquam sem et tortor consequat. Eget
            mi proin sed libero enim sed faucibus turpis in. Hac habitasse
            platea dictumst quisque. In aliquam sem fringilla ut. Gravida rutrum
            quisque non tellus orci ac auctor augue mauris. Accumsan lacus vel
            facilisis volutpat est velit egestas dui id. At tempor commodo
            ullamcorper a. Volutpat commodo sed egestas egestas fringilla. Vitae
            congue eu consequat ac.
          </p>
        </div>
      </section>

      <footer className="container mx-auto bg-white py-8 border-t border-gray-400">
        <div className="container flex px-3 py-8 ">
          <div className="w-full mx-auto flex flex-wrap">
            <div className="flex w-full lg:w-1/2 ">
              <div className="px-3 md:px-0">
                <h3 className="font-bold text-gray-900">About</h3>
                <p className="py-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas vel mi ut felis tempus commodo nec id erat.
                  Suspendisse consectetur dapibus velit ut lacinia.
                </p>
              </div>
            </div>
            <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
              <div className="px-3 md:px-0">
                <h3 className="font-bold text-gray-900">Social</h3>
                <ul className="list-reset items-center pt-3">
                  <li>
                    <a className="inline-block no-underline hover:text-black hover:underline py-1">
                      Add social links
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
    )
}