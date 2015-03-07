#!/usr/bin/env python
# -*- coding: utf-8 -*-
from setuptools import setup

try:
    from jupyterpip import cmdclass
except:
    import pip, importlib
    pip.main(['install', 'jupyter-pip']); cmdclass = importlib.import_module('jupyterpip').cmdclass

setup(
    name='metricsgraphics',
    version='0.0.1',
    description='Metrics Graphics for the Jupyter Notebook',
    author='Kyle Kelley',
    author_email='rgbkrk@gmail.com',
    license='New BSD License',
    url='https://github.com/rgbkrk/',
    keywords='data visualization interactive interaction python ipython widgets widget metrics graphics',
    install_requires=['ipython', 'jupyter-pip'],
    classifiers=['Development Status :: 4 - Beta',
                 'Programming Language :: Python',
                 'License :: OSI Approved :: BSD License'],
    packages=['metricsgraphics'],
    include_package_data=True,
    cmdclass=cmdclass('metricsgraphics'),
)
